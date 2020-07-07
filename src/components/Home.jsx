import React, { Fragment, useContext, useState, useEffect } from "react";

// contexts
import TiniContext from "./context/tiniContext";

// hoc componentes
import withTemplate from "./hoc/withTemplate";

// hooks
import useTitle from "./hooks/useTitle";

// custom components
import Counter from "./Counter";
import Quote from "./Quote";

// services
import { getQuotes } from "../services/apiService";

// styles
import "../styles/home.scss";

const searchQuote = (quotes, day) => {
  const quoteDay = new Date();
  quoteDay.setDate(quoteDay.getDate() - day);
  quoteDay.setHours(-3, 0, 0, 0);

  return quotes.find((q) => q.date === quoteDay.toISOString()) || {};
};

function Home() {
  const [quotes, setQuotes] = useState([]);
  const { days } = useContext(TiniContext);

  useEffect(() => {
    async function initQuotes() {
      const { data } = await getQuotes();
      setQuotes(data);
    }
    initQuotes();
  }, []);

  useTitle(days);

  return (
    <div className="home__container centered">
      {[...Array(days).keys()].reverse().map((day, ind) => {
        const currentQuote = searchQuote(quotes, ind);
        return (
          <div className="home__container-day" key={ind}>
            <Counter days={day} />
            <Quote days={days} day={ind} quote={currentQuote} />
          </div>
        );
      })}
    </div>
  );
}

export default withTemplate(Home);
