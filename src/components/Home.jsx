import React, { Component, Fragment } from "react";
import Template from "./common/Template";
import DoubleTile from "./common/DoubleTile";
import SingleTile from "./common/SingleTile";

import { getInputs } from "../services/apiService";

import "../styles/Home.scss";

class Home extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await getInputs();
    this.setState({ data }, () => console.log(this.state));
  }

  render() {
    const { data } = this.state;
    console.log("render", data);
    if (!data) return "Loading...";
    return (
      <Fragment>
        <div className="container-home">
          {data.map((d, i) => {
            return <DoubleTile data={d} key={i} />;
          })}
          <SingleTile />
          <DoubleTile />
          <SingleTile />
        </div>
      </Fragment>
    );
  }
}

export default Template(Home);
