import React, { Component } from 'react';
import './Head.css';

class Head extends Component{
  render(){
    return(
      <div>
        <header className="head">
          <h1>&#127866; Beer Run</h1>
          <nav className="menu">
            <a href="#" className="menu-toggle">
              <span className="trigger">&#9776;</span>
              <ul>
                <li>Home</li>
                <li>About</li>
              </ul>
            </a>
          </nav>
        </header>
      </div>
    )
  } 
}

export default Head;