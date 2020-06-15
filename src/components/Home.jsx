import React, { Fragment, useContext } from "react";

// contexts
import TiniContext from "./context/tiniContext";

// hoc componentes
import withTemplate from "./hoc/withTemplate";

// hooks
import useTitle from "./hooks/useTitle";

// styles
import "../styles/home.scss";

function Home() {
  const { days } = useContext(TiniContext);

  useTitle(days);

  return (
    <Fragment>
      <div className="home__container">{days}</div>
    </Fragment>
  );
}

export default withTemplate(Home);
