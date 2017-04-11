import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Head from './components/Head';
import Foot from './components/Foot';
import './index.css';

ReactDOM.render(
  <div>
  <div className="container">
    <Head />
    <App />
    <Foot />
  </div>
  </div>,
  document.getElementById('root')
);
