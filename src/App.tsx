import { useState } from "react";
import "./App.scss";
import QuoteBox from "./components/QuoteBox";
import q from "./data/quotes.json";

export type Quote = {
  quote: string;
  author: string;
};

function App() {
  const quotes = q.quotes;
  const [quote, setQuote] = useState<Quote>(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [color, setColor] = useState(1);

  const getQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setColor((i) => {
      if (i === 3) return 1;
      else return i + 1;
    });
  };

  return (
    <main className="App" color={color.toString()}>
      <QuoteBox quote={quote} getQuote={getQuote} color={color.toString()} />
    </main>
  );
}

export default App;
