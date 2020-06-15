import React from "react";
import withBlock from "./hoc/withBlock";
import "../styles/counter.scss";

const Counter = ({ days, showTooltip }) => {
  console.log(showTooltip);
  return <div className="counter__container">{days}</div>;
};

export default withBlock(Counter);
