import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="Navigation-Container">
      <h1>Nav Bar</h1>
      <Link to="/">Home</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/about-me">About Me</Link>
      <hr />
    </div>
  );
};

export default NavigationBar;
