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

  const nameCounts = [7, 6, 8];

  const getImagesForPage = (startIndex, count) => {
    return ComicCategories.slice(startIndex, startIndex + count);
  };

  return (
    <div className="">
      <NavbarWithSubmenu />
      <div className="">
        {" "}
        {Array.from({
          length: Math.ceil(ComicCategories.length / Math.min(...nameCounts)),
        }).map((_, pageIndex) => {
          const namesToShow = nameCounts[pageIndex % nameCounts.length];
          const imagesForPage = getImagesForPage(
            0,
            Math.min(namesToShow, ComicCategories.length)
          );

          const PageComponent = {
            7: Page6,
            6: Page5,
          }[namesToShow];

          return (
            <div className="small-screen-cont" key={pageIndex}>
              {PageComponent && <PageComponent content={imagesForPage} />}
            </div>
          );
        })}
      </div>
      <div className="cont">
        <HTMLFlipBook
          width={500}
          height={1000}
          size="stretch"
          showCover={false}
          usePortrait={false}
          swipeDistance={0}
          // autoSize={false}
        >
          <div className="screen2-container">
            <div className="">
              <div className="item-large mb-1">
                <FullImage
                  // style={" mb-2"}
                  height={"h-92"}
                  textBottom={"bottom-9"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"All"}
                  buttonText={"Explore"}
                />
              </div>
            </div>
            <div className="side1-container">
              <div className="item">
                <FullImage
                  style={""}
                  textBottom={"bottom-32"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"DC"}
                  buttonText={"Explore"}
                />
              </div>
              <div className="item">
                <FullImage
                  style={""}
                  textBottom={"bottom-32"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"Marvel"}
                  buttonText={"Explore"}
                />
              </div>
            </div>

            <div className="side1-container">
              <div className="">
                <div className="item-small">
                  <FullImage
                    height={" h-40"}
                    textBottom={"bottom-9"}
                    image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    heading={"Image"}
                    buttonText={"Explore"}
                  />
                </div>
                <div className="item-small">
                  <FullImage
                    height={"h-40"}
                    textBottom={"bottom-9"}
                    image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    heading={"Dark Horse"}
                    buttonText={"Explore"}
                  />
                </div>
              </div>
              <div className="">
                <div className="item-small">
                  <FullImage
                    height={"h-40"}
                    textBottom={"bottom-9"}
                    image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    heading={"Wildstorm"}
                    buttonText={"Explore"}
                  />
                </div>
                <div className="item-small">
                  <FullImage
                    height={"h-40"}
                    textBottom={"bottom-9"}
                    image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    heading={"Dynamite"}
                    buttonText={"Explore"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="screen2-container">
            <div className="side1-container">
              <div className="item">
                <FullImage
                  style={""}
                  textBottom={"bottom-32"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"Powerverse"}
                  buttonText={"Explore"}
                />
              </div>
              <div className="item">
                <FullImage
                  style={""}
                  textBottom={"bottom-32"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"133ART"}
                  buttonText={"Explore"}
                />
              </div>
            </div>
            <div className="">
              <div className="item-small">
                <FullImage
                  style={" mb-2"}
                  height={"h-40"}
                  textBottom={"bottom-9"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"Vertigo"}
                  buttonText={"Explore"}
                />
              </div>
              <div className="item-small">
                <FullImage
                  height={"h-40"}
                  textBottom={"bottom-9"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"DC"}
                  buttonText={"Explore"}
                />
              </div>
            </div>
            <div className="side1-container">
              <div className="item">
                <FullImage
                  style={""}
                  textBottom={"bottom-32"}
                  // image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"Powerverse"}
                  buttonText={"Explore"}
                />
              </div>
              <div className="item">
                <FullImage
                  style={""}
                  textBottom={"bottom-32"}
                  image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  heading={"133ART"}
                  buttonText={"Explore"}
                />
              </div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default ComicSelection;
