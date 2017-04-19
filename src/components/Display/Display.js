import React from 'react';
import './Display.css';

export default ({
  name, category, address, cityState, link, phone
}) => (
  <div className="tile">
  <div className="main">
    <div className="constrain">
      <h2><a href={link}>{name}</a></h2>
      <h4>{category}</h4>
      <h3>{address}<br/>{cityState}<br/>{phone}</h3>
    </div>
  </div>
  </div>
);