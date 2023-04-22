import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import q from "./data/quotes.json";

export type Quote = {
  quote: string;
  author: string;
};

function App() {
  const quotes = q.quotes;
  const [quote, setQuote] = useState<Quote>(quotes[0]);
  const getQuote = () =>
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <main className="App">
      <QuoteBox quote={quote} getQuote={getQuote} />
    </main>
  );
}

export default App;
