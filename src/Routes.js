import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import House from './containers/House';
import News from './containers/News';

export default () =>
  <Switch>
    <Route path="/house" component={House} />
    <Route path="/news" component={News} />
    <LandingPage exact path="/" />
    <Login exact path="/login" />

    { /* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>;
