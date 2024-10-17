import React from "react";
import { Link } from "react-router-dom";

import "./NewHomePage.css";
import HTMLFlipBook from "react-pageflip";

import { Typography, Button } from "@material-tailwind/react";
import African from "../../assets/HomepageImages/African.jpg";
import Clothes from "../../assets/HomepageImages/Clothes.jpg";
import Publish from "../../assets/HomepageImages/Publish.jpg";
import NavbarWithSubmenu from "../../components/navbar/navbar";
import PageFlip from "../pageFlip/pageFlip";

const NewHomePage = () => {
  return (
    <div className="cont">
      <NavbarWithSubmenu />

      <HTMLFlipBook
        width={500}
        height={1000}
        size="stretch"
        showCover={false}
        usePortrait={false}
        swipeDistance={0}
        // autoSize={false}
      >
        <div className="home-container">
          <figure className="relative h-96 w-full  pane1">
            <img
              className="homepage-img h-full w-full rounded-xl object-cover object-center  shadow-xl shadow-blue-gray-900/50"
              src={African}
              alt="nature image"
            />
            <figcaption className="absolute  bottom-24 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="">
                  Latest Comics
                </Typography>
                <Typography color="" className="mt-4   font-normal">
                  Explore our diverse selection of comic books.
                </Typography>
                <div className="">
                  {/* <Link to="all-comics"> */}
                  <Button color="blue" className="mt-4 ">
                    Explore
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="relative h-96 w-full pane2">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={Clothes}
              alt="nature image"
            />
            <figcaption className="absolute bottom-10 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="">
                  Merch Store
                </Typography>
                <Typography color="" className="mt-4 font-normal">
                  Browse our stylish collection of hoodies, t-shirts, and
                  accessories.
                </Typography>
                <Button color="blue" className="mt-4 ">
                  Explore
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="home-container">
          <figure className="relative h-96 w-full pane3">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={Publish}
              alt="nature image"
            />
            <figcaption className="absolute bottom-24 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="">
                  Publishing
                </Typography>
                <Typography color="" className="mt-4 font-normal">
                  Have a story to tell? Publish your comic or graphic novel with
                  us!
                </Typography>
                <Button color="blue" className="mt-4 ">
                  Explore
                </Button>
              </div>
            </figcaption>
          </figure>
          <figure className="relative h-96 w-full pane4">
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Sara Lamalo
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                  20 July 2022
                </Typography>
              </div>
              <Typography variant="h5" color="blue-gray">
                Growth
              </Typography>
            </figcaption>
          </figure>
        </div>
        <div className="">{/* <PageFlip /> */}</div>
      </HTMLFlipBook>
    </div>
  );
};

export default NewHomePage;
