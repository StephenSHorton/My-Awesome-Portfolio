// TODO
//    Make a server that will hold data like the introDesc and the quotes for quote-generator.js
//    Add featured projects / videos
//    Add special FX
//    Put a cool module on front page to grab attention maybe
import React from "react";

import QuoteGenerator from "../components/quote-generator";
const Home = () => {
  const introDesc = `Welcome to my AWESOME portfolio! Here you'll find 
    the best of my creations as a Software Engineer. I 
    love coding, it's my passion. I work on a lot 
    of stacks whether it be React Websites or AI in game 
    development I'm always finding cool things to build. Click 
    the "Projects" tab to see some of my work!`;
  return (
    <div className="Home-Container">
      <QuoteGenerator />
      <h2>{introDesc}</h2>
    </div>
  );
};

export default Home;
