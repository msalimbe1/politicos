import React from "react";

const TiniContext = React.createContext({
  days: Math.floor((new Date() - new Date("03/20/20")) / (1000 * 60 * 60 * 24)),
});

export default TiniContext;
