import React from "react";
import Media from "react-media";
import NavBar from "./Componnets/Jsx/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Componnets/Jsx/Home";
import DashBoard from "./Componnets/Jsx/DashBoard";
import Contact from "./Componnets/Jsx/Contact";
import Profile from "./Componnets/Jsx/Profile";
import Resume from "./Componnets/Jsx/Resume";

import Portfolio from "./Componnets/Jsx/Portfolio";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/DashBoard" exact component={DashBoard} />
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <div style={{ marginTop: "90px" }}>
                <Route path="/Portfolio" exact component={Portfolio} />
                <Route path="/Resume" exact component={Resume} />
                <Route path="/Profile" exact component={Profile} />
                <Route path="/Contact" exact component={Contact} />
              </div>
            ) : (
              <Route path="*" exact component={Home} />
            )
          }
        </Media>
      </Switch>
    </Router>
  );
};

export default App;
