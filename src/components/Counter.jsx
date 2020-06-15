import React from "react";
import withBlock from "./hoc/withBlock";

import "../styles/counter.scss";
import logo from "../images/logo.png";

const Counter = ({ days, showTooltip }) => {
  console.log(showTooltip);
  return (
    <div className="counter__container">
      {`${days}`}
      <img src={logo} alt="cuarentini" />
    </div>
  );
};

export default withBlock(Counter);
