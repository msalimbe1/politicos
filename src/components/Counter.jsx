import React from "react";
import withBlock from "./hoc/withBlock";

import "../styles/counter.scss";
// import logo from "../images/logo.png";

const Counter = ({ days, showTooltip }) => {
  // console.log(showTooltip);
  return (
    <div className="counter__container">
      {`${days + 1}`}
      {/* <img src={logo} alt="cuarentini" /> */}
      {/* <div className="counter__helper">
        Días desde el inicio oficial de la cuarentena argentina el 20 de Marzo
        de 2020.
      </div> */}
    </div>
  );
};

export default withBlock(Counter);
