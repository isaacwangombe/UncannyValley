import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  Button,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import Fuse from "fuse.js";
import HTMLFlipBook from "react-pageflip";
import "./AllComics.css";
import ComicImages from "../../../assets/ComicImages/ComicImagesSmaller";
import NavbarWithSubmenu from "./../../../components/navbar/navbar";
import Page1 from "./../../../components/ComicPages/Page1/Page1";
import Page2 from "./../../../components/ComicPages/Page2/Page2";
import Page3 from "./../../../components/ComicPages/Page3/Page3";
import useScreenSize from "../../../components/CustomHooks/useScreenSize";
import ComicCategories from "./../../../assets/MenuItems/ComicCategories";
import OpeningPage from "../../../components/ComicPages/OpeningPage/OpeningPage";

const AllComics = ({ Category }) => {
  const isSmallScreen = useScreenSize(768);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter
  // const [nameCounts, setNameCounts] = useState([]);
  const selectedCategory = ComicCategories.find(
    (category) => category.Id == categoryFilter
  );

  const book = useRef(null);

  const nameCounts = [7, 6, 8];
  useEffect(() => {
    const flipPage = () => {
      if (book.current && typeof book.current.pageFlip === "function") {
        book.current.pageFlip().flipNext();
      }
    };

    // Slight delay to allow book.current to initialize
    const timeoutId = setTimeout(flipPage, 2000);
    // setFirstLoad(false);
    return () => clearTimeout(timeoutId);
  }, []);

  const fuseOptions = {
    keys: ["Name"],
    threshold: 0.4, // Fuzzy search threshold
  };
  const fuse = new Fuse(ComicImages, fuseOptions);

  // Filter logic based on search term and category
  const filteredComicImages = ComicImages.filter((comic) => {
    const matchesSearchTerm = searchTerm
      ? fuse.search(searchTerm).some((result) => result.item === comic)
      : true; // If no search term, include all
    const matchesCategory = categoryFilter
      ? comic.Category === Number(categoryFilter)
      : true; // If no category selected, include all

    console.log("Comic Category:", comic.Category);

    return matchesSearchTerm && matchesCategory;
  });

  // Function to get images for a specific page range
  const getImagesForPage = (startIndex, count) => {
    return filteredComicImages.slice(startIndex, startIndex + count);
  };

  // Reset to the first page when searchTerm or categoryFilter changes
  useEffect(() => {
    const resetToFirstPage = () => {
      if (book.current && book.current.pageFlip) {
        setTimeout(() => {
          book.current.pageFlip().turnToPage(0); // Reset to the first page
        }, 100); // Delay to ensure FlipBook is ready
      }
    };
    resetToFirstPage(); // Call the reset function when search term or category changes
  }, [searchTerm, categoryFilter]);

  // Get unique categories from ComicImages
  const uniqueCategories = [
    ...new Map(
      ComicCategories.map((category) => [category.Id, category])
    ).values(),
  ];

  return (
    <div className="fade-in">
      <NavbarWithSubmenu />

      {/* Search and Filter Section */}
      <div className="search-container">
        <div className="w-72 mx-5">
          <Select
            label="Filter Categories"
            value={categoryFilter}
            onChange={setCategoryFilter}
            className="category-select"
          >
            <Option value="">All</Option>
            {uniqueCategories.map(({ Id, Name }) => (
              <Option key={Id} value={Id}>
                {Name}
              </Option>
            ))}
          </Select>
        </div>

        <div className="w-72 mx-5">
          <Input
            label="Search Comics"
            type="text"
            placeholder="Search comics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <Typography variant="h2" className="m-10 eater-regular" color="blue-gray">
        {selectedCategory ? selectedCategory.Name : "All"} Comics
      </Typography>

      {/* Comic Display Section */}
      {isSmallScreen ? (
        <div>
          {Array.from({
            length: Math.ceil(
              filteredComicImages.length / Math.min(...nameCounts)
            ),
          }).map((_, pageIndex) => {
            const namesToShow = nameCounts[pageIndex % nameCounts.length];
            const imagesForPage = getImagesForPage(
              0,
              Math.min(namesToShow, filteredComicImages.length)
            );

            const PageComponent = {
              7: Page1,
              6: Page2,
              8: Page3,
            }[namesToShow];

            return (
              <div className="small-screen-cont" key={pageIndex}>
                {PageComponent && <PageComponent content={imagesForPage} />}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div>
            <Button
              color="blue"
              className="mx-10"
              onClick={() => book.current?.pageFlip().flipPrev()}
            >
              Prev page
            </Button>
            <Button
              color="blue"
              className="mx-10"
              onClick={() => book.current?.pageFlip().flipNext()}
            >
              Next page
            </Button>
          </div>

          <div className="cont">
            <HTMLFlipBook
              width={500}
              height={1000}
              size="stretch"
              usePortrait={true}
              swipeDistance={0}
              useMouseEvents={false}
              ref={book}
              showCover={true}
            >
              {Array.from({
                length: Math.ceil(
                  filteredComicImages.length / Math.min(...nameCounts)
                ),
              }).map((_, pageIndex) => {
                // Determine how many names/images to show for the current page
                const namesToShow = nameCounts[pageIndex % nameCounts.length];

                // Adjust the starting index for images based on pageIndex, so that page 0 shows only once
                const imagesForPage = getImagesForPage(
                  pageIndex === 0 ? 0 : pageIndex * namesToShow,
                  Math.min(
                    namesToShow,
                    filteredComicImages.length - pageIndex * namesToShow
                  )
                );

                // Conditionally select the page component
                const PageComponent =
                  pageIndex === 0
                    ? OpeningPage // Show only once for pageIndex 0
                    : {
                        7: Page1,
                        6: Page2,
                        8: Page3,
                      }[namesToShow];

                return (
                  <div key={pageIndex}>
                    {PageComponent && (
                      <PageComponent
                        content={imagesForPage}
                        selectedCategory={selectedCategory.Name}
                      />
                    )}
                  </div>
                );
              })}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllComics;
