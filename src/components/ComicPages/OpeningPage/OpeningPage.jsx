import React from "react";
import { Typography } from "@material-tailwind/react";
import Opening from "./../../../assets/Opening.png";

const OpeningPage = ({ selectedCategory }) => {
  return (
    <div>
      <figure className="relative h-screen w-auto">
        <img
          className="h-full w-full rounded-xl object-cover object-fill"
          src={Opening}
          alt="nature image"
        />
        <figcaption className="absolute top-32 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl  py-4 px-6 ">
          <div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="eater-regular"
            >
              {selectedCategory ? selectedCategory : "All"} Comics{" "}
            </Typography>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default OpeningPage;
