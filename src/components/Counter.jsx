import React from "react";
import withBlock from "./hoc/withBlock";

import "../styles/counter.scss";
// import logo from "../images/logo.png";

const Counter = ({ days, showTooltip }) => {
  console.log(showTooltip);
  return (
    <div className="counter__container">
      {`${days}`}
      {/* <img src={logo} alt="cuarentini" /> */}
      <div className="counter__helper">
        Días desde el inicio oficial de la cuarentena argentina el 20 de Marzo
        2020.
      </div>
    </div>
  );
};

export default withBlock(Counter);
