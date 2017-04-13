import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import FindBeer from './components/FindBeer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={FindBeer}>
      {/*<Route path="/find" component={FindBeer}/>*/}
    </Route>
  </Router>
);