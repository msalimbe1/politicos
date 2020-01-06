import React, { Component } from "react";
// import "../../styles/Header.scss";
class Header extends Component {
  state = {};

  render() {
    const { settings } = this.props;
    const login = settings ? settings.login : false;
    return (
      <div className={`container-header ${login ? "gray" : "white"}`}>
        <a href="">
          <div className="title">Politicos</div>
        </a>
        <div className="bee" />
      </div>
    );
  }
}

export default Header;
