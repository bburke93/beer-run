import React, { Component } from 'react';
import mark from './ghMark.png';
import './About.css';

class About extends Component {
  render() {
    return (
     <div className="main">
      <div className="constrain">
        <br/>
        <p>
          Beer Run allows users to search cities for beer related venues such as brewpubs, brewerys, beer bars and more. 
          By default the app will return up to 10 results for the given city, or all results if less than 10 are found.
          Beer Run is made possible thanks to <a href="https://beermapping.com">The Beer Mapping Project</a> APi.
        </p>
        <br/>
        <p>
          Created by: <br/> Brandon Burke
          <br/> brandonburke93@outlook.com
        </p>
        <a href="https://github.com/bburke93/beer-run"><img src={mark}/></a>
      </div>
     </div> 
    )
  }
}

export default About;
