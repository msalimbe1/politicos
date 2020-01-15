import React, { Fragment } from "react";

import { dayText } from "../../util/datetime";

import { osURL } from "../../config.json";

import "../../styles/tweets.scss";

const DoubleTweet = ({ data }) => {
  if (!data) return "Loading...";

  const { authors, avatars, titles, texts, dates, media, links, tags } = data;

  return (
    <Fragment>
      <div className="container-tweets">
        <div className="fecha">{dayText(dates[0])}</div>
        {/* <div className="title">{authors[0]}</div>
        <div className="subtitle">{titles[0]}</div> */}
        {[0, 1].map((n, i) => {
          const link = new URL(links[n]).hostname;
          return (
            <div className="tile" key={i}>
              <div className="gridtile">
                <div className="tweets">
                  <img src={`${osURL}${media[n]}`} alt="lala" />
                </div>
                <div className="links">
                  ref.
                  <a href={links[n]} target="_blank">
                    {link}
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

export default DoubleTweet;
