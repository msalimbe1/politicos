import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "../../styles/template.scss";

function withTemplate(Component) {
  return class withTemplate extends React.Component {
    state = {};

    render() {
      return (
        <div className={`template__container`}>
          <Header />
          <Component />
          <Footer />
        </div>
      );
    }
  };
}

export default withTemplate;
