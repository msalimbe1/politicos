import React, { Component, Fragment } from "react";

// custom components
import Template from "./common/Template";

//styles
import "../styles/home.scss";

class Home extends Component {
  state = {};

  // async componentDidMount() {
  //   const { data } = { data: "hola" }; //await getInputs();
  //   this.setState({ data }, () => console.log(this.state));
  // }

  render() {
    // const { data } = this.state;
    // if (!data) return "Loading...";
    return (
      <Fragment>
        <div className="home__container">
          {(new Date() - new Date("03/20/20")) / (1000 * 60 * 60 * 24)}
        </div>
      </Fragment>
    );
  }
}

export default Template(Home);
