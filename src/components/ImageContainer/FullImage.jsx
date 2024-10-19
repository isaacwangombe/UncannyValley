import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import "./FullImage.css";
import { Link } from "react-router-dom";

const FullImage = ({
  style,
  height,
  fit,
  textBottom,
  image,
  heading,
  description,
  price,
  linkTo,
  buttonText,
}) => {
  return (
    <figure
      className={`relative w-full ${height ? height : " h-96 "} ${style}`}
    >
      <img
        className={`h-full w-full ${fit ? fit : "object-fit"}  object-center`}
        src={
          image
            ? image
            : "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        }
        alt="nature image"
      />
      <figcaption
        className={`absolute content-center ${
          textBottom ? textBottom : "bottom-24"
        } rounded-xl  left-2/4 flex flex w-[calc(100%)] -translate-x-2/4 justify-between  border border-white bg-white/75 py-4 px-2 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm`}
      >
        <div className="">
          <Typography variant="h5" color="" className={heading ? "" : "hidden"}>
            {heading}
          </Typography>
          <Typography
            color="blue-gray"
            className={`font-normal texts  ${description ? "" : "hidden"}`}
          >
            {description}
          </Typography>
          <Typography
            color="gray"
            className={`mt-1 font-small ${price ? "" : "hidden"}`}
          >
            {price}
          </Typography>
          {linkTo ? (
            <Link to={linkTo}>
              <Button color="blue" className="mt-4 ">
                {buttonText}
              </Button>
            </Link>
          ) : (
            <Button color="blue" className="">
              {buttonText}
            </Button>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default FullImage;
