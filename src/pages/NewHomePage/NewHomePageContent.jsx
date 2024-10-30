import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NewHomePage.css";

import { Typography, Button } from "@material-tailwind/react";
import African from "../../assets/HomepageImages/African.jpg";
import Clothes from "../../assets/HomepageImages/Clothes.jpg";
import Publish from "../../assets/HomepageImages/Publish.jpg";

const NewHomePageContent = ({ shrunk, clickedButton }) => {
  const handleClick = (category) => {
    clickedButton(category);
  };
  return (
    <div className="">
      <div
        className={`header-body  shadow-xl shadow-blue-gray-900/50 box ${
          shrunk ? "shrink" : ""
        }`}
      >
        <div className="">
          <figure className="relative w-full header-pane">
            <img
              className="homepage-img h-full w-full object-cover object-center"
              src={African}
              alt="nature image"
            />
            <figcaption className="absolute bottom-4 left-2/4 flex   -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography className="heading-text " color="blue-gray">
                  Welcome to Uncanny Valley Comics{" "}
                </Typography>
                <Typography color="" className="text-normal">
                  The one Stop shop for all your nerdy needs in Nairobi{" "}
                </Typography>
                <div className="">
                  <Button
                    color="blue"
                    className="mt-4 "
                    onClick={() => {
                      handleClick("1");
                    }}
                  >
                    Explore Our Comics
                  </Button>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="section-2">
          <figure className="relative   w-full   pane1">
            <img
              className="homepage-img h-full w-full object-cover object-center"
              src={African}
              alt="nature image"
            />
            <figcaption className="absolute  bottom-10 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography className="heading-text" color="blue-gray">
                  Latest Comics
                </Typography>
                <Typography color="" className="text-normal">
                  Explore our diverse selection of comic books.
                </Typography>
                <div className="">
                  {/* <Link to="all-comics"> */}
                  <Button
                    color="blue"
                    className="mt-4 "
                    onClick={() => {
                      handleClick("1");
                    }}
                  >
                    Explore
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </figcaption>
          </figure>
          <div className="">
            <figure className="relative  w-full pane2">
              <img
                className="h-full w-full object-cover object-center"
                src={Publish}
                alt="nature image"
              />
              <figcaption className="absolute bottom-1 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="heading-text"
                  >
                    Publishing
                  </Typography>
                  <Typography color="" className="  text-normal">
                    Have a story to tell?
                  </Typography>
                  <Button color="blue" className="">
                    Explore
                  </Button>
                </div>
              </figcaption>
            </figure>
            <figure className="relative w-full pane3">
              <img
                className="h-full w-full  object-cover object-center"
                src={Clothes}
                alt="nature image"
              />
              <figcaption className="absolute bottom-1 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <Typography
                    variant="h5"
                    className="heading-text"
                    color="blue-gray"
                  >
                    Merch Store
                  </Typography>
                  <Typography color="" className=" text-normal">
                    Browse our stylish collection.
                  </Typography>
                  <Button
                    color="blue"
                    className=""
                    onClick={() => {
                      handleClick("2");
                    }}
                  >
                    Explore
                  </Button>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="section-2">
          <figure className="relative w-full pane2 ">
            <img
              className="h-full w-full  object-cover object-center"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <figcaption className="absolute bottom-4 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography
                  variant="h5"
                  className="heading-text"
                  color="blue-gray"
                >
                  Contact Us
                </Typography>
                <Button color="blue" className="mt-2 ">
                  Explore
                </Button>
              </div>
            </figcaption>
          </figure>
          <figure className="relative  w-full pane2 ">
            <img
              className="h-full w-full  object-cover object-center"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <figcaption className="absolute bottom-4 left-2/4 flex  -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography
                  variant="h5"
                  className="heading-text"
                  color="blue-gray"
                >
                  About Us
                </Typography>
                <Button color="blue" className="mt-2 ">
                  Explore
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default NewHomePageContent;
