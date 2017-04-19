import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import About from './components/About';
import FindBeer from './components/FindBeer';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={FindBeer}/>
    <Route path="/about" component={About}/>
  </Router>
);