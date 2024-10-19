import React from "react";
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

const ComicSelection = () => {
  const isSmallScreen = useScreenSize(768);

  const nameCounts = [7, 8];

  const getImagesForPage = (startIndex, count) => {
    return ComicCategories.slice(startIndex, startIndex + count);
  };

  return (
    <div className="">
      <NavbarWithSubmenu />
      {isSmallScreen ? (
        <div className="">
          {Array.from({
            length: Math.ceil(ComicCategories.length / Math.min(...nameCounts)),
          }).map((_, pageIndex) => {
            // Calculate the total number of items shown before this page
            const startIndex = nameCounts
              .slice(0, pageIndex)
              .reduce((sum, count) => sum + count, 0);

            // Determine how many names/images to show on this page
            const namesToShow = nameCounts[pageIndex % nameCounts.length];

            // Get the images for the current page
            const imagesForPage = getImagesForPage(
              startIndex,
              Math.min(namesToShow, ComicCategories.length - startIndex) // Ensure we don't go past the length
            );

            // Choose the correct PageComponent based on how many names to show
            const PageComponent = {
              7: Page6,
              8: Page5,
            }[namesToShow];

            return (
              <div className="small-screen-cont" key={pageIndex}>
                {PageComponent && <PageComponent content={imagesForPage} />}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="">
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
              showCover={false}
              usePortrait={true}
              swipeDistance={0}
              useMouseEvents={false}

              // autoSize={false}
            >
              {Array.from({
                length: Math.ceil(
                  ComicCategories.length / Math.min(...nameCounts)
                ),
              }).map((_, pageIndex) => {
                // Calculate the total number of items shown before this page
                const startIndex = nameCounts
                  .slice(0, pageIndex)
                  .reduce((sum, count) => sum + count, 0);

                // Determine how many names/images to show on this page
                const namesToShow = nameCounts[pageIndex % nameCounts.length];

                // Get the images for the current page
                const imagesForPage = getImagesForPage(
                  startIndex,
                  Math.min(namesToShow, ComicCategories.length - startIndex) // Ensure we don't go past the length
                );

                // Choose the correct PageComponent based on how many names to show
                const PageComponent = {
                  7: Page6,
                  8: Page5,
                }[namesToShow];

                return (
                  <div className="" key={pageIndex}>
                    {PageComponent && <PageComponent content={imagesForPage} />}
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
