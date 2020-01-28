import React from 'react';
import NavBar from './Componnets/Jsx/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Componnets/Jsx/Home';
import DashBoard from './Componnets/Jsx/DashBoard';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/DashBoard" exact component={DashBoard} />
        <Route path="*" exact component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
