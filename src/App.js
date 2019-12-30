import React from 'react';
import NavBar from './Componnets/Jsx/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Componnets/Jsx/Home';
import Services from './Componnets/Jsx/Services';
import Experience from './Componnets/Jsx/Experience';
import Works from './Componnets/Jsx/Works';
import DashBoard from './Componnets/Jsx/DashBoard';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Services" component={Services} />
        <Route path="/Works" component={Works} />
        <Route path="/DashBoard" component={DashBoard} />

      </Switch>
    </Router>

  );
}

export default App;
