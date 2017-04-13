import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Head.css';

class Head extends Component{
  constructor(props){
    super(props);
    this.home = this.home.bind(this);
    this.about = this.about.bind(this);
  }

  home(){
    browserHistory.push('/')
  }

  about(){
    browserHistory.push('/about')
  }
  
  render(){
    return(
      <div>
        <header className="head">
          <h1>&#127866; Beer Run</h1>
          <nav className="menu">
            <span className="menu-toggle">
              <span className="trigger">&#9776;</span>
              <ul>
                <li><a onClick={this.home}>Home</a></li>
                <li><a onClick={this.about}>About</a></li>
              </ul>
            </span>
          </nav>
        </header>
      </div>
    )
  } 
}

export default Head;