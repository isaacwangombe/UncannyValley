import React from "react";
import FullImage from "../../ImageContainer/FullImage";

const Page5 = ({ content }) => {
  return (
    <div>
      <div className="screen2-container">
        <div className="side1-container">
          <div className="item">
            {content[0] && content[0].Image ? (
              <FullImage
                textBottom={"bottom-32"}
                image={content[0].Image}
                heading={content[0].Name}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
          <div className="item">
            {content[1] && content[1].Image ? (
              <FullImage
                textBottom={"bottom-32"}
                image={content[1].Image}
                heading={content[1].Name}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
        </div>
        <div className="">
          <div className="item-small">
            {content[2] && content[2].Image ? (
              <FullImage
                style={" mb-2"}
                height={"h-40"}
                textBottom={"bottom-9"}
                image={content[2].Image}
                heading={content[2].Name}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
          <div className="item-small">
            {content[3] && content[3].Image ? (
              <FullImage
                height={"h-40"}
                textBottom={"bottom-9"}
                image={content[3].Image}
                heading={content[3].Name}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
        </div>
        <div className="side1-container">
          <div className="item">
            {content[4] && content[4].Image ? (
              <FullImage
                textBottom={"bottom-32"}
                image={content[4].Image}
                heading={content[4].Name}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
          <div className="item">
            {content[5] && content[5].Image ? (
              <FullImage
                textBottom={"bottom-32"}
                image={content[5].Image}
                heading={content[5].Name}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
