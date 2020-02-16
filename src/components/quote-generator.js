// TODO
//    Get quotes from api somewhere, maybe google docs or some place wher you can list quotes easily
//    (Samsung notes maybe, or google reminders? etc...)
import React from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = React.useState(null);
  const quotes = [
    '"Sometimes you have to turn left 3 times before you\'re right." -Karel J Robot',
    '"Don\'t think that you have to over-think things." -Anonymous',
    '"Today you are you! That is truer than true! There is no one alive who is you-er than you!" -Dr. Seuss'
  ];

  React.useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="QuoteGenerator-Container">
      <h1>{quote}</h1>
    </div>
  );
};

export default QuoteGenerator;
