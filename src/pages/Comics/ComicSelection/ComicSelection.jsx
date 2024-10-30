import { React, useEffect, useRef, useCallback, useState } from "react";
import "./ComicSelection.css";
import { Link } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import { Typography, Button } from "@material-tailwind/react";
import FullImage from "../../../components/ImageContainer/FullImage";
import ComicCategories from "./../../../assets/MenuItems/ComicCategories";
import useScreenSize from "./../../../components/CustomHooks/useScreenSize";
import Page6 from "../../../components/ComicPages/Page6/Page6";
import Page5 from "../../../components/ComicPages/Page5/Page5";
import NavbarWithSubmenu from "../../../components/navbar/navbar";
import NewHomePageContent from "../../NewHomePage/NewHomePageContent";
import ComicImages from "../../../assets/ComicImages/ComicImagesSmaller";
import Merch from "../../../assets/MenuItems/Merch";

const ComicSelection = () => {
  const isSmallScreen = useScreenSize(768);
  const [isShrunk, setIsShrunk] = useState(false);

  const [childData, setChildData] = useState("");
  const [nameCounts, setNameCounts] = useState([1, 7, 8]);
  // const isInitialMount = useRef(true); // Ref to track initial mount
  const [firstMount, setIfFirstMount] = useState(true);

  const handleChildData = (data) => {
    setChildData(data);
  };

  // const nameCounts = [1, 7];

  // const getImagesForPage = (startIndex, count) => {
  //   return Merch.slice(startIndex, startIndex + count);
  // };

  const handleShrink = () => {
    setIsShrunk(true);
    const timer = setTimeout(() => {
      book.current.pageFlip().flipNext();
    }, 3000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (firstMount === true) {
      setIfFirstMount(false); // Skip the first render
    } else {
      handleShrink(); // Call only on updates
    }
  }, [childData]);

  useEffect(() => {
    if (childData === "2") {
      setNameCounts([1, 7]);
    } else {
      setNameCounts([1, 7, 8]);
    }
  }, [childData]); // Only run this effect if `childData` changes

  const getImagesForPage = useCallback(
    (startIndex, count) => {
      if (childData === "2") {
        return Merch.slice(startIndex, startIndex + count);
      } else {
        return ComicCategories.slice(startIndex, startIndex + count);
      }
    },
    [nameCounts] // Recalculate this function when `childData` changes
  );
  const book = useRef();

  const onInit = useCallback((e) => {
    book.current.pageFlip().flipNext();
  }, []);

  // Calculate total images in ComicCategories
  const totalImages = ComicCategories.length;

  // Calculate total pages based on the minimum name count
  const totalPages = nameCounts.reduce((totalPages, count) => {
    const itemsCovered = nameCounts
      .slice(0, totalPages)
      .reduce((sum, num) => sum + num, 0);
    return itemsCovered < ComicCategories.length ? totalPages + 1 : totalPages;
  }, 0);
  return (
    <div className="fade-in">
      <NavbarWithSubmenu />
      {isSmallScreen ? (
        <div className="">
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            // Calculate the starting index for images on this page
            const startIndex = nameCounts
              .slice(0, pageIndex)
              .reduce((sum, count) => sum + count, 0);

            // Determine the number of images to show on this page
            const namesToShow = nameCounts[pageIndex % nameCounts.length];

            // Prevent rendering if startIndex exceeds totalImages
            if (startIndex >= totalImages) return null;

            // Fetch images for the current page within bounds
            const imagesForPage = getImagesForPage(
              startIndex,
              Math.min(namesToShow, totalImages - startIndex)
            );

            // Select the correct PageComponent only once for NewHomePageContent
            const PageComponent =
              pageIndex === 0
                ? NewHomePageContent // Show only on the first page
                : {
                    7: Page6,
                    8: Page5,
                  }[namesToShow];

            // Render the page if a component exists and images are available
            return (
              <div className="small-screen-cont" key={pageIndex}>
                {PageComponent && imagesForPage.length > 0 && (
                  <PageComponent content={imagesForPage} shrunk={true} />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="">
          {/* <div>
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
          </div> */}
          <div className="cont">
            <HTMLFlipBook
              width={500}
              height={1000}
              size="stretch"
              showCover={true}
              // usePortrait={true}
              // swipeDistance={0}
              useMouseEvents={true}
              ref={book}
              // onInit={onInit}

              // autoSize={false}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                // Calculate the total number of items shown before this page
                const startIndex = nameCounts
                  .slice(0, pageIndex)
                  .reduce((sum, count) => sum + count, 0);

                // Determine how many names/images to show on this page
                const namesToShow = nameCounts[pageIndex % nameCounts.length];

                // Prevent rendering if out of bounds
                if (startIndex >= ComicCategories.length) return null;

                // Get the images for the current page
                const imagesForPage = getImagesForPage(
                  startIndex,
                  Math.min(namesToShow, ComicCategories.length - startIndex) // Ensure we don't go past the length
                );

                // Choose the correct PageComponent based on whether it's the first page
                const PageComponent =
                  pageIndex === 0
                    ? NewHomePageContent // Show NewHomePageContent only on the first page
                    : {
                        7: Page6,
                        8: Page5,
                      }[namesToShow];

                // Ensure valid component and images
                if (!PageComponent || imagesForPage.length === 0) return null;

                return (
                  <div className="page" key={pageIndex}>
                    <PageComponent
                      content={imagesForPage}
                      shrunk={isShrunk}
                      linkTo={"/all-comics"}
                      clickedButton={handleChildData}
                    />
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

export default ComicSelection;
