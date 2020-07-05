import React, { Fragment, useContext } from "react";

// contexts
import TiniContext from "./context/tiniContext";

// hoc componentes
import withTemplate from "./hoc/withTemplate";

// hooks
import useTitle from "./hooks/useTitle";

// custom components
import Counter from "./Counter";
import Quote from "./Quote";

// styles
import "../styles/home.scss";

function Home() {
  const { days } = useContext(TiniContext);

  useTitle(days);

  return (
    <Fragment>
      <div className="home__container centered">
        {[...Array(days).keys()].reverse().map((day, ind) => {
          console.log(day);
          return (
            <div className="home__container-day" key={ind}>
              <Counter days={day} />
              <Quote days={days} day={ind} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default withTemplate(Home);
