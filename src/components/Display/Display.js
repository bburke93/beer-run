import React from 'react';

export default ({
  name = "Name missing",
  category, address, cityState
}) => (
  <div className="main">
    <div className="constrain">
      <h2>{name}</h2>
      <h4>{category}</h4>
      <h3>{address}<br/>{cityState}</h3>
    </div>
  </div>
);