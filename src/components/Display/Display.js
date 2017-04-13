import React from 'react';

export default ({
  name = "Name missing",
  category, address
}) => (
  <div className="main">
    <div className="constrain">
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h3>{address}</h3>
    </div>
  </div>
);