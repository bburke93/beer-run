import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/Head';
import Foot from './components/Foot';
import Routes from './routes.js';
import './index.css';

ReactDOM.render(
  <div className="container">
    <Head />
    <Routes/>
    <Foot />
  </div>,
  document.getElementById('root')
);
