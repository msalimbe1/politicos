import React, { Component, Fragment } from "react";
import { osURL } from "../../config.json";

import "../../styles/doubles.scss";

const DoubleTile = ({ data }) => {
  if (!data) return "Loading...";

  const { authors, avatars, titles, texts, dates, media, links, tags } = data;
  console.log(authors);
  console.log(`${osURL}${authors[0]}`);

  return (
    <Fragment>
      <div className="container-doubles">
        <div className="left">
          <div className="gridtile">
            <div>
              <img src={`${osURL}${avatars[0]}`} alt="new" />
            </div>
            <div>{titles[0]}</div>
            <div>{texts[0]}</div>
            <div>{dates[0]}</div>
            <div>{media[0]}</div>
            <div>{links[0]}</div>
            <div>{tags[0]}</div>
          </div>
        </div>
        <div className="right">
          <div className="gridtile">
            <div>{authors[1]}</div>
            <div>{avatars[1]}</div>
            <div>{titles[1]}</div>
            <div>{texts[1]}</div>
            <div>{dates[1]}</div>
            <div>{media[1]}</div>
            <div>{links[1]}</div>
            <div>{tags[1]}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DoubleTile;
