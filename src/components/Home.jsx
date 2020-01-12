import React, { Component, Fragment } from "react";
import Template from "./common/Template";
import DoubleTile from "./common/DoubleTile";
import DoubleTweet from "./common/DoubleTweet";
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
            console.log("map", d, d.authors.length);
            return d.authors.length > 1 ? (
              d.authors[0][0] === "@" ? (
                <DoubleTweet data={d} key={i} />
              ) : (
                <DoubleTile data={d} key={i} />
              )
            ) : (
              <SingleTile data={d} key={i} />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Template(Home);
