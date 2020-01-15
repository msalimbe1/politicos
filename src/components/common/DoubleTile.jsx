import React, { Fragment } from "react";
import ReactPlayer from "react-player";

import { dayText } from "../../util/datetime";
import { osURL } from "../../config.json";

import "../../styles/doubles.scss";

const DoubleTile = ({ data }) => {
  if (!data) return "Loading...";
  console.log(data);
  const { authors, dates, titles, texts, media, links, tags } = data;
  return (
    <Fragment>
      <div className="container-doubles">
        {/* <div className="fecha">{dayText(dates[0])}</div> */}
        {/* <div className="title">{authors[0]}</div>
        <div className="subtitle">{titles[0]}</div> */}

        {[0, 1].map((n, i) => {
          const link = new URL(links[n]).hostname;
          return (
            <div className="tile" key={i}>
              <div className="gridtile">
                <div className="player">
                  <ReactPlayer
                    className="video"
                    url={`${osURL}${media[n]}`}
                    controls
                    width="100%"
                    height=""
                  />
                </div>
                <div className="text">{texts[n]}</div>
                <div className="links">
                  ref.
                  <a href={links[n]} target="_blank">
                    {link}
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* {tags.map((tag, i) => {
          return <div className="tags">{tag}</div>;
        })} */}
      </div>
    </Fragment>
  );
};

export default DoubleTile;
