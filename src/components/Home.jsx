import React, { Component, Fragment } from "react";
import Template from "./common/Template";
import DoubleTile from "./common/DoubleTile";
import SingleTile from "./common/SingleTile";

import "../styles/Home.scss";

class Home extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="container-home">
          <DoubleTile />
          <SingleTile />
        </div>
      </Fragment>
    );
  }
}

export default Template(Home);
