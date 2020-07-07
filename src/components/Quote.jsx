import React from "react";
import withBlock from "./hoc/withBlock";

import "../styles/quote.scss";

const options = { year: "numeric", month: "long", day: "numeric" };

const Quote = ({ quote, day }) => {
  const quoteDay = new Date();
  quoteDay.setDate(quoteDay.getDate() - day);

  const { text, author, subtitle, link, twitter } = quote;

  return (
    <div className="quote__container">
      <div className="quote__container-date">
        {`${quoteDay.toLocaleDateString("es-ES", options)}`}
      </div>
      <br />
      <div className="quote__container-text">{`"${text}"`}</div>
      <br />
      <div className="quote__container-author">{`${author}`}</div>
      <br />
      <div className="quote__container-subtitle">{`${subtitle}`}</div>
      <br />
      <div className="quote__container-link">
        <a
          className="quote__container-link-src"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"fuente"}
        </a>

        <a
          className="quote__container-link-twitter"
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${twitter}`}
        </a>
      </div>
    </div>
  );
};

export default withBlock(Quote);
