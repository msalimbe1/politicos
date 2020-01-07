import React from "react";
import ReactPlayer from "react-player";

import { dayText } from "../../util/datetime";
import { osURL } from "../../config.json";

import "../../styles/singles.scss";

const SingleTile = ({ data }) => {
  if (!data) return "Loading...";
  const { authors, avatars, titles, texts, dates, media, links, tags } = data;
  console.log("SingleTile");
  console.log(`${osURL}${authors[0]}`);

  return (
    <div className="container-singles">
      <div className="gridtile">
        <div className="avatar">
          <img src={`${osURL}${avatars[0]}`} alt="new" />
        </div>
        <div className="fecha">{dayText(dates[0])}</div>
        <div className="title">{authors[0]}</div>
        <div className="title">{titles[0]}</div>
        <div className="player">
          <ReactPlayer url={`${osURL}${media[0]}`} controls />
        </div>
        <div className="text">{texts[0]}</div>
        <div className="links">
          <a href={links[0]} target="_blank">
            Link
          </a>
          {}
        </div>
      </div>
    </div>
  );
};

export default SingleTile;
