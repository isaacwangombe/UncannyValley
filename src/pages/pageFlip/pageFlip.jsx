import React from "react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

import HTMLFlipBook from "react-pageflip";
import "./pageFlip.css";
import ComicImages from "../../assets/ComicImages/ComicImagesSmaller";

import NavbarWithSubmenu from "./../../components/navbar/navbar";
import Page1 from "./../../components/ComicPages/Page1/Page1";
import Page2 from "./../../components/ComicPages/Page2/Page2";
import Page3 from "./../../components/ComicPages/Page3/Page3";

const PageFlip = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Media query for screen sizes smaller than 768px
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Handler function for media query change
    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches); // Set state based on screen size
    };

    // Check initial screen size
    handleScreenChange(mediaQuery);

    // Add event listener to media query
    mediaQuery.addEventListener("change", handleScreenChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const book = useRef();

  // Define the class names (these will cycle per page)
  const classNames = ["page-1", "page-2", "page-3"];

  // Define the number of names to show per page (7, 8, 9)
  const nameCounts = [7, 6, 8];

  // Helper function to get the images for each page
  const getImagesForPage = (startIndex, count) => {
    return ComicImages.slice(startIndex, startIndex + count);
  };

  // Initialize current index to track the start index as we move through pages
  let currentIndex = 0;

  // Continue rendering until all items are processed
  let remainingItems = ComicImages.length;

  return (
    <div className="">
      <NavbarWithSubmenu />

      {isSmallScreen ? (
        <div>
          {Array.from({
            length: Math.ceil(ComicImages.length / Math.min(...nameCounts)),
          }).map((_, pageIndex) => {
            // Cycle through the class names and name counts
            const className = classNames[pageIndex % classNames.length];
            const namesToShow = nameCounts[pageIndex % nameCounts.length];

            // If there are fewer images left than namesToShow, adjust namesToShow
            const adjustedNamesToShow = Math.min(namesToShow, remainingItems);

            // Get the images for this page based on the current index
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
                return null; // Fallback
            }

            // Render the FlipPage component with the available images
            const pageComponent = (
              <div className="small-screen-cont">
                <PageComponent key={pageIndex} content={imagesForPage} />

                {/* <PageTwo
          key={pageIndex}
          images={imagesForPage}
          className={className}
        /> */}
              </div>
            );

            // Update the currentIndex for the next page and remaining items
            currentIndex += adjustedNamesToShow;
            remainingItems -= adjustedNamesToShow;

            return pageComponent;
          })}
        </div>
      ) : (
        <div className="">
          <div className="">
            <Button
              color="blue"
              className="mx-10"
              onClick={() => book.current.pageFlip().flipPrev()}
            >
              Prev page
            </Button>
            <Button
              color="blue"
              onClick={() => book.current.pageFlip().flipNext()}
            >
              Next page
            </Button>
          </div>
          <div className="cont">
            <HTMLFlipBook
              width={500}
              height={1000}
              size="stretch"
              // showCover={true}
              usePortrait={true}
              swipeDistance={0}
              // autoSize={false}
              useMouseEvents={false}
              ref={book}
            >
              {Array.from({
                length: Math.ceil(ComicImages.length / Math.min(...nameCounts)),
              }).map((_, pageIndex) => {
                // Cycle through the class names and name counts
                const className = classNames[pageIndex % classNames.length];
                const namesToShow = nameCounts[pageIndex % nameCounts.length];

                // If there are fewer images left than namesToShow, adjust namesToShow
                const adjustedNamesToShow = Math.min(
                  namesToShow,
                  remainingItems
                );

                // Get the images for this page based on the current index
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
                    return null; // Fallback
                }

                // Render the FlipPage component with the available images
                const pageComponent = (
                  <div className="">
                    <PageComponent key={pageIndex} content={imagesForPage} />

                    {/* <PageTwo
                key={pageIndex}
                images={imagesForPage}
                className={className}
              /> */}
                  </div>
                );

                // Update the currentIndex for the next page and remaining items
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

export default PageFlip;
