import React, { Component, Fragment } from "react";
import Template from "./common/Template";

import "../styles/Home.scss";

class Home extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="container">Hola</div>
      </Fragment>
    );
  }
}

export default Template(Home);
