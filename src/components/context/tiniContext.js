import React from "react";

const TiniContext = React.createContext({
  days: Math.ceil(
    (new Date("2021-03-19T22:19:06.661Z") - new Date("03/20/20")) /
      (1000 * 60 * 60 * 24)
  ),
});

export default TiniContext;
