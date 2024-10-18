import React from "react";
import "./Page4.css";
import { Link } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import { Typography, Button } from "@material-tailwind/react";
import FullImage from "../../ImageContainer/FullImage";

const Page4 = () => {
  return (
    <div>
      <div className="side1-container">
        <FullImage
          style={"panel-1"}
          image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          heading={"DC"}
          buttonText={"Explore"}
        />
        <FullImage
          style={"panel-2"}
          textBottom={"bottom-20"}
          image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          heading={"DC"}
          buttonText={"Explore"}
        />
      </div>
      <div className="panel-3">
        <FullImage
          style={" mb-2"}
          height={"h-48"}
          textBottom={"bottom-5"}
          image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          heading={"DC"}
          buttonText={"Explore"}
        />
        <FullImage
          height={"h-48"}
          textBottom={"bottom-5"}
          image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          heading={"DC"}
          buttonText={"Explore"}
        />
      </div>
      <div className="side1-container mt-3">
        <div className="">
          <FullImage
            height={"h-48"}
            textBottom={"bottom-5"}
            image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            heading={"DC"}
            buttonText={"Explore"}
          />

          <FullImage
            style={"mt-3"}
            height={"h-48"}
            textBottom={"bottom-5"}
            image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            heading={"DC"}
            buttonText={"Explore"}
          />
        </div>
        <div className="">
          <FullImage
            height={"h-48"}
            textBottom={"bottom-5"}
            image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            heading={"DC"}
            buttonText={"Explore"}
          />
          <FullImage
            style={"mt-3"}
            height={"h-48"}
            textBottom={"bottom-5"}
            image="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            heading={"DC"}
            buttonText={"Explore"}
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
