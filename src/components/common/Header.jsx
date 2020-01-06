import React, { Component } from "react";
import "../../styles/Header.scss";
class Header extends Component {
  state = {};

  render() {
    const { settings } = this.props;

    return (
      <div className={`container-header`}>
        <a href="">
          <div className="title">Politicos</div>
        </a>
      </div>
    );
  }
}

export default Header;
