import React from "react";
import "./Page6.css";
import FullImage from "../../ImageContainer/FullImage";
import AllComics from "../../../pages/Comics/AllComics/AllComics";

const Page6 = ({ content, linkTo }) => {
  return (
    <div className="screen2-container">
      <div className="item-large">
        {content[0] && content[0].Image ? (
          <FullImage
            fit={"object-cover"}
            textBottom={"bottom-32"}
            image={content[0].Image}
            heading={content[0].Name}
            linkTo={linkTo}
            state={{ Category: content[0].Id }}
            buttonText={"Explore"}
          />
        ) : (
          <div className="blank-image"></div> // Blank div when image is not available
        )}
      </div>
      <div className="side1-container">
        <div className="item">
          {content[1] && content[1].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[1].Image}
              heading={content[1].Name}
              linkTo={linkTo}
              state={{ Category: content[1].Id }}
              buttonText={"Explore"}
            />
          ) : (
            <div className="blank-image"></div> // Blank div when image is not available
          )}
        </div>
        <div className="item">
          {content[2] && content[2].Image ? (
            <FullImage
              textBottom={"bottom-32"}
              image={content[2].Image}
              heading={content[2].Name}
              linkTo={linkTo}
              state={{ Category: content[2].Id }}
              buttonText={"Explore"}
            />
          ) : (
            <div className="blank-image"></div> // Blank div when image is not available
          )}
        </div>
      </div>

      <div className="side1-container">
        <div className="">
          <div className="item-small">
            {content[3] && content[3].Image ? (
              <FullImage
                height={" h-40"}
                textBottom={"bottom-9"}
                image={content[3].Image}
                heading={content[3].Name}
                linkTo={linkTo}
                state={{ Category: content[3].Id }}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
          <div className="item-small">
            {content[4] && content[4].Image ? (
              <FullImage
                height={"h-40"}
                textBottom={"bottom-9"}
                image={content[4].Image}
                heading={content[4].Name}
                linkTo={linkTo}
                state={{ Category: content[4].Id }}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
        </div>
        <div className="">
          <div className="item-small">
            {content[5] && content[5].Image ? (
              <FullImage
                height={"h-40"}
                textBottom={"bottom-9"}
                image={content[5].Image}
                heading={content[5].Name}
                linkTo={linkTo}
                state={{ Category: content[5].Id }}
                buttonText={"Explore"}
              />
            ) : (
              <div className="blank-image"></div> // Blank div when image is not available
            )}
          </div>
          <div className="item-small">
            {content[6] && content[6].Image ? (
              <FullImage
                height={"h-40"}
                textBottom={"bottom-9"}
                image={content[6].Image}
                heading={content[6].Name}
                linkTo={linkTo}
                state={{ Category: content[6].Id }}
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

export default Page6;
