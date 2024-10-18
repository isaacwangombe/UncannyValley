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

const AllComics = ({ Category }) => {
  const isSmallScreen = useScreenSize(768);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter
  const selectedCategory = ComicCategories.find(
    (category) => category.Id == categoryFilter
  );

  const book = useRef(null);

  const classNames = ["page-1", "page-2", "page-3"];
  const nameCounts = [7, 6, 8];

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
    <div>
      <NavbarWithSubmenu />
      <div className="search-container">
        <div className=" w-72  mx-5">
          <Select
            label="Filter Categories"
            value={categoryFilter}
            onChange={(value) => setCategoryFilter(value)}
            className="category-select  "
          >
            <Option value="">All</Option>
            {uniqueCategories.map((category) => (
              <Option key={category.Id} value={category.Id}>
                {category.Name}
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

      <Typography variant="h2" className="m-10">
        {selectedCategory ? selectedCategory.Name : "All"} Comics
      </Typography>

      {/* Search input */}

      {/* Category filter dropdown */}

      {isSmallScreen ? (
        <div>
          {Array.from({
            length: Math.ceil(
              filteredComicImages.length / Math.min(...nameCounts)
            ),
          }).map((_, pageIndex) => {
            // Reset currentIndex and remainingItems for filtered results
            let currentIndex = 0;
            let remainingItems = filteredComicImages.length;

            const className = classNames[pageIndex % classNames.length];
            const namesToShow = nameCounts[pageIndex % nameCounts.length];

            const adjustedNamesToShow = Math.min(namesToShow, remainingItems);
            const imagesForPage = getImagesForPage(
              currentIndex,
              adjustedNamesToShow
            );

            let PageComponent;
            switch (namesToShow) {
              case 7:
                PageComponent = Page1;
                break;
              case 6:
                PageComponent = Page2;
                break;
              case 8:
                PageComponent = Page3;
                break;
              default:
                return null;
            }

            const pageComponent = (
              <div className="small-screen-cont">
                <PageComponent key={pageIndex} content={imagesForPage} />
              </div>
            );

            currentIndex += adjustedNamesToShow;
            remainingItems -= adjustedNamesToShow;

            return pageComponent;
          })}
        </div>
      ) : (
        <div>
          <div>
            <Button
              color="blue"
              className="mx-10"
              onClick={() => {
                if (book.current && book.current.pageFlip) {
                  book.current.pageFlip().flipPrev(); // Safely call flipPrev
                }
              }}
            >
              Prev page
            </Button>
            <Button
              color="blue"
              className="mx-10"
              onClick={() => {
                if (book.current && book.current.pageFlip) {
                  book.current.pageFlip().flipNext(); // Safely call flipNext
                }
              }}
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
            >
              {Array.from({
                length: Math.ceil(
                  filteredComicImages.length / Math.min(...nameCounts)
                ),
              }).map((_, pageIndex) => {
                // Reset currentIndex and remainingItems for filtered results
                let currentIndex = 0;
                let remainingItems = filteredComicImages.length;

                const className = classNames[pageIndex % classNames.length];
                const namesToShow = nameCounts[pageIndex % nameCounts.length];

                const adjustedNamesToShow = Math.min(
                  namesToShow,
                  remainingItems
                );
                const imagesForPage = getImagesForPage(
                  currentIndex,
                  adjustedNamesToShow
                );

                let PageComponent;
                switch (namesToShow) {
                  case 7:
                    PageComponent = Page1;
                    break;
                  case 6:
                    PageComponent = Page2;
                    break;
                  case 8:
                    PageComponent = Page3;
                    break;
                  default:
                    return null;
                }

                const pageComponent = (
                  <div className="">
                    <PageComponent key={pageIndex} content={imagesForPage} />
                  </div>
                );

                currentIndex += adjustedNamesToShow;
                remainingItems -= adjustedNamesToShow;

                return pageComponent;
              })}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllComics;
