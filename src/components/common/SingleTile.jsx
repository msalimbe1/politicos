import React from "react";
import ReactPlayer from "react-player";

import { dayText } from "../../util/datetime";
import { osURL } from "../../config.json";

import "../../styles/singles.scss";

const SingleTile = ({ data }) => {
  if (!data) return "Loading...";
  const { authors, avatars, titles, texts, dates, media, links, tags } = data;

  const link = new URL(links[0]).hostname;

  return (
    <div className="container-singles">
      <div className="gridtile">
        <div className="avatar">
          <img src={`${osURL}${avatars[0]}`} alt="new" />
        </div>
        <div className="fecha">{dayText(dates[0])}</div>
        <div className="title">{authors[0]}</div>
        <div className="subtitle">{titles[0]}</div>
        <div className="player">
          <ReactPlayer
            className="video"
            url={`${osURL}${media[0]}`}
            controls
            width="100%"
          />
        </div>
        <div className="text">{texts[0]}</div>
        <div className="links">
          ref.
          <a href={links[0]} target="_blank">
            {link}
          </a>
          {}
        </div>
      </div>
    </div>
  );
};

export default SingleTile;
