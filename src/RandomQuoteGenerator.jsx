import React from "react";
import { useState } from "react";

const quotes = [
  "if you are good enough, never do it for free",
  "i am not afraid of man who practices 1000kicks one time but rather 1 kick 1000 times",
  "abc",
  "def",
  "iop",
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0]);

  function randomizeQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  return (
    <>
      <div className="quote">{quote}</div>
      <button className="click-me-button" onClick={randomizeQuote}>
        Click me
      </button>
    </>
  );
};

export default RandomQuoteGenerator;
