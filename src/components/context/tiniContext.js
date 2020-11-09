import React from "react";

const TiniContext = React.createContext({
  days: Math.ceil(
    (new Date("11/08/20") - new Date("03/20/20")) / (1000 * 60 * 60 * 24)
  ),
});

export default TiniContext;
