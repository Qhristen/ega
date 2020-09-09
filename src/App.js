import React from "react";
import Media from "react-media";
import NavBar from "./Componnets/Jsx/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Componnets/Jsx/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Home />
    </Router>
  );
};

export default App;
