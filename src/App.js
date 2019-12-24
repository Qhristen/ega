import React from 'react';
import NavBar from './Componnets/Jsx/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Componnets/Jsx/Home';
import Services from './Componnets/Jsx/Services';
import Experience from './Componnets/Jsx/Experience';
import Works from './Componnets/Jsx/Works';
import DashPage from './Componnets/Jsx/DashPage';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Services" component={Services} />
        <Route path="/Works" component={Works} />
        <Route path="/DashPage" component={DashPage} />

      </Switch>
    </Router>

  );
}

export default App;
