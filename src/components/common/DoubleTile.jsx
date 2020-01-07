import React, { Component, Fragment } from "react";
import ReactPlayer from "react-player";

import { dayText } from "../../util/datetime";

import { osURL } from "../../config.json";

import "../../styles/doubles.scss";

const DoubleTile = ({ data }) => {
  if (!data) return "Loading...";

  const { authors, avatars, titles, texts, dates, media, links, tags } = data;
  console.log(tags);
  console.log(`${osURL}${authors[0]}`);

  return (
    <Fragment>
      <div className="container-doubles">
        {[0, 1].map(n => {
          return (
            <div className="tile">
              <div className="gridtile">
                <div className="avatar">
                  <img src={`${osURL}${avatars[n]}`} alt="new" />
                </div>
                <div className="fecha">{dayText(dates[n])}</div>
                <div className="title">{titles[n]}</div>
                <div className="player">
                  <ReactPlayer url={`${osURL}${media[n]}`} controls />
                </div>
                <div className="text">{texts[n]}</div>
                <div className="links">
                  <a href={links[n]} target="_blank">
                    Link
                  </a>
                  {}
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
