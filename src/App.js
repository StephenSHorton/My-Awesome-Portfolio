import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
// import Cookie from "js-cookie";
// import axios from "axios";

import "./styles/main.scss";

import NavigationBar from "./navigation/navigation-bar";
import Home from "./pages/home";
import Videos from "./pages/videos";
import Projects from "./pages/projects";
import Posts from "./pages/posts";
import AboutMe from "./pages/about-me";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/about-me" component={AboutMe} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
