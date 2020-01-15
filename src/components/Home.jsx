import React, { Component, Fragment } from "react";
import Template from "./common/Template";
import DoubleTile from "./common/DoubleTile";
import DoubleTweet from "./common/DoubleTweet";
import SingleTile from "./common/SingleTile";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FormatQuoteOutlinedIcon from "@material-ui/icons/FormatQuoteOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";

import { osURL } from "../config.json";
import { getInputs } from "../services/apiService";
import { dayText } from "../util/datetime";

import "../styles/Home.scss";

class Home extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await getInputs();
    this.setState({ data }, () => console.log(this.state));
  }

  render() {
    const { data } = this.state;
    if (!data) return "Loading...";
    return (
      <Fragment>
        <div className="container-home">
          <VerticalTimeline className="vertical" layout="1-column">
            {data.map((input, ind) => {
              console.log(input);
              const { authors, avatars, dates } = input;
              const tweet = authors[0].includes("@");
              const double = authors.length > 1;

              return (
                <VerticalTimelineElement
                  key={ind}
                  className="vertical-timeline-element--work"
                  // contentStyle={{
                  //   background: "rgb(33, 150, 243)"
                  //   // color: "#fff"
                  // }}
                  contentArrowStyle={{
                    borderRight: "7px solid lightblue"
                  }}
                  date={<div>Hola</div>}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={
                    <div className="avatar">
                      <img src={`${osURL}${avatars[0]}`} alt="new" />
                    </div>
                  }
                >
                  {tweet ? (
                    <DoubleTweet data={input} />
                  ) : double ? (
                    <DoubleTile data={input} />
                  ) : (
                    <SingleTile data={input} />
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Fragment>
    );
  }
}

export default Template(Home);
