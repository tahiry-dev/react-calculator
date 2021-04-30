import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';
import NavBar from './Navbar';

const Routes = () => (
  <main>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={App} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </Router>
  </main>
);
export default Routes;
