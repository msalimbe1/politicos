import React, { Component, Fragment } from "react";
import "../../styles/doubles.scss";

const DoubleTile = ({ left, right }) => {
  return (
    <Fragment>
      <div className="container-doubles">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </Fragment>
  );
};

export default DoubleTile;
