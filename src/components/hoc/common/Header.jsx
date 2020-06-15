import React, { Component } from "react";
import "../../../styles/header.scss";
class Header extends Component {
  state = {};

  render() {
    // const { settings } = this.props;

    return (
      <div className={`header__container`}>
        <div className="title">{`P O L I T I C O S  🌞  A R G E N T I N O S`}</div>
      </div>
    );
  }
}

export default Header;
