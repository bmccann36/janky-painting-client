import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import House from './containers/House';

export default () =>
  <Switch>
    <Route path="/house" component={House} />
    <LandingPage exact path="/" />
    <Login exact path="/login" />

    { /* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>;
