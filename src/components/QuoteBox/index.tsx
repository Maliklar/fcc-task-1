import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import styles from "./index.module.scss";
import { Quote } from "../../App";
type Props = {
  quote: Quote;
  getQuote: VoidFunction;
};
const QuoteBox = ({ quote, getQuote }: Props) => {
  return (
    <>
      <div className={styles.container} id="quote-box">
        <div className={styles.text} id="quote-text">
          <span>
            <FontAwesomeIcon icon={faQuoteLeftAlt} />
            {quote.quote}
          </span>
        </div>
        <div className={styles.author} id="quote-author">
          - {quote.author}
        </div>
        <div className={styles.buttons} id="buttons">
          <Button onClick={getQuote}>New quote</Button>

          <div id="tweet-quote" className={styles.quoteTweet}>
            <Button onClick={() => {}} link>
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button onClick={() => {}} link>
              <FontAwesomeIcon icon={faTumblr} />
            </Button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>by someone</footer>
    </>
  );
};
export default QuoteBox;
