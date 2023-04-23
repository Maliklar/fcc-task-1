import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Quote } from "../../App";
import Button from "../Button";
import styles from "./index.module.scss";
type Props = {
  quote: Quote;
  getQuote: VoidFunction;
  color: string;
};
const QuoteBox = ({ quote, color, getQuote }: Props) => {
  return (
    <>
      <div className={styles.container} id="quote-box">
        <div className={styles.text} id="quote-text" color={color.toString()}>
          <span>
            <FontAwesomeIcon icon={faQuoteLeftAlt} />
            {quote.quote}
          </span>
        </div>
        <div
          className={styles.author}
          id="quote-author"
          color={color.toString()}
        >
          - {quote.author}
        </div>

        <div className={styles.buttons} id="buttons">
          <Button onClick={getQuote} id="new-quote" color={color.toString()}>
            New quote
          </Button>

          <div id="tweet-quote" className={styles.quoteTweet}>
            <Button
              onClick={() => {}}
              id="tweet-quote"
              link="https://twitter.com/intent/tweet"
              color={color.toString()}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button
              onClick={() => {}}
              id="tumblr-quote"
              link="https://www.tumblr.com/"
              color={color.toString()}
            >
              <FontAwesomeIcon icon={faTumblr} />
            </Button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>By Malik</footer>
    </>
  );
};
export default QuoteBox;
