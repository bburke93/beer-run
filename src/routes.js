import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import About from './components/About';
import FindBeer from './components/FindBeer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={FindBeer}/>
    <Route path="/about" component={About}/>
  </Router>
);