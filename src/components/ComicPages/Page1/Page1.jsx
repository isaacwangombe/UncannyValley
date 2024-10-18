import React from "react";
import FullImage from "../../ImageContainer/FullImage";

import { Typography } from "@material-tailwind/react";

import "./Page1.css";

const Page1 = ({ content }) => {
  return (
    <div className="screen2-container">
      <div className="screen2-cont1">
        <div className="screen2-one item">
          {content[0] && content[0].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[0].Image}
              description={content[0].Name}
              price={`Price: ${content[0].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div> // Blank div when image is not available
          )}
        </div>
        <div className="screen2-two item">
          {content[1] && content[1].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[1].Image}
              description={content[1].Name}
              price={`Price: ${content[1].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div>
          )}
        </div>
      </div>
      <div className="screen2-cont2">
        <div className="screen2-three item">
          {content[2] && content[2].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[2].Image}
              description={content[2].Name}
              price={`Price: ${content[2].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div>
          )}
        </div>
        <div className="screen2-four item">
          {content[3] && content[3].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[3].Image}
              description={content[3].Name}
              price={`Price: ${content[3].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div>
          )}
        </div>
      </div>
      <div className="screen2-cont3">
        <div className="screen2-five item">
          {content[4] && content[4].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[4].Image}
              description={content[4].Name}
              price={`Price: ${content[4].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div>
          )}
        </div>
        <div className="screen2-six item">
          {content[5] && content[5].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[5].Image}
              description={content[5].Name}
              price={`Price: ${content[5].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div>
          )}
        </div>
        <div className="screen2-seven item">
          {content[6] && content[6].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[6].Image}
              description={content[6].Name}
              price={`Price: ${content[6].Price} Kes`}
              buttonText={"Buy"}
            />
          ) : (
            <div className="blank-image"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;
