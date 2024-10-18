import React from "react";
import { Typography, Button } from "@material-tailwind/react";

const FullImage = ({
  style,
  height,
  textBottom,
  image,
  heading,
  description,
  buttonText,
}) => {
  return (
    <figure
      className={`relative h-96 w-full ${height ? height : " h-96 "} ${style}`}
    >
      <img
        className="h-full w-full  object-cover object-center"
        src={image}
        alt="nature image"
      />
      <figcaption
        className={`absolute ${
          textBottom ? textBottom : "bottom-24"
        } rounded-xl  left-2/4 flex  -translate-x-2/4 justify-between  border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm`}
      >
        <div>
          <Typography variant="h5" color="">
            {heading}
          </Typography>
          <Typography color="" className="mt-4 font-normal">
            {description}
          </Typography>
          <Button color="blue" className="mt-4 ">
            {buttonText}
          </Button>
        </div>
      </figcaption>
    </figure>
  );
};

export default FullImage;
