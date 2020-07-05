import React from "react";
import withBlock from "./hoc/withBlock";

import "../styles/quote.scss";
// import logo from "../images/logo.png";

let options = { year: "numeric", month: "long", day: "numeric" };

const Quote = ({ day }) => {
  const quoteDay = new Date();

  quoteDay.setDate(quoteDay.getDate() - day);
  const quote = "Lorem ipsum dolor sit  ad";
  const author = "Alberto Fernandez";
  return (
    <div className="quote__container">
      <div className="quote__container-date">
        {`${quoteDay.toLocaleDateString("es-ES", options)}`}
      </div>
      <br />
      <div className="quote__container-text">{`"${quote}"`}</div>
      <br />
      <div className="quote__container-author">{`${author}`}</div>
    </div>
  );
};

export default withBlock(Quote);
