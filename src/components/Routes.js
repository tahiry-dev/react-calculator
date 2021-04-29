import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/calculator" component={App} />
    <Route path="/quote" component={Quote} />

  </Switch>
);
export default Routes;
