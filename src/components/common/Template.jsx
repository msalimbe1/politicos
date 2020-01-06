import React from "react";
import Header from "./Header";
// import Footer from './Footer';
// import Divisor from './Divisor';
import "../../styles/template.scss";

const Template = (Screen, settings) => {
  const login = settings ? settings.login : false;
  return () => (
    <div
      className={`container-template ${
        login ? "gray" : "white"
      } safari_only_tmpl`}
    >
      <Header settings={settings} />
      <Screen settings={settings} />
      {/* <Footer settings={settings} /> */}
    </div>
  );
};

export default Template;
