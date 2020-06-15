import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/template.scss";

const Template = (Screen, settings) => {
  return () => (
    <div className={`template__container`}>
      <Header settings={settings} />
      <Screen />
      <Footer settings={settings} />
    </div>
  );
};

export default Template;
