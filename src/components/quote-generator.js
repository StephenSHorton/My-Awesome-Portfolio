// TODO
//    Get quotes from api somewhere, maybe google docs or some place wher you can list quotes easily
//    (Samsung notes maybe, or google reminders? etc...)
import React from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = React.useState(null);
  const [author, setAuthor] = React.useState(null);
  const quotes = [
    '"Sometimes you have to turn left 3 times before you\'re right." -Karel J Robot',
    '"Don\'t think that you have to over-think things." -Anonymous',
    '"Today you are you! That is truer than true! There is no one alive who is you-er than you!" -Dr. Seuss'
  ];

  React.useEffect(() => {
    let x = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[x].substring(0, quotes[x].lastIndexOf('"') + 1));
    setAuthor(
      quotes[x].substring(quotes[x].lastIndexOf('"') + 1, quotes[x].length)
    );
  }, []);

  return (
    <div className="QuoteGenerator-Container">
      <div className="margin-left"></div>
      <h1>{quote}</h1>
      <h2>{author}</h2>
      <div className="margin-right"></div>
    </div>
  );
};

export default QuoteGenerator;
