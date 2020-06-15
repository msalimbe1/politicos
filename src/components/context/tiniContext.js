import React from "react";

const TiniContext = React.createContext({
  days: (new Date() - new Date("03/20/20")) / (1000 * 60 * 60 * 24),
});

console.log(typeof TiniContext);
console.log(TiniContext);

export default TiniContext;
