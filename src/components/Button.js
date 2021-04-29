import React from 'react';

/* eslint-disable react/prop-types */
const Button = ({
  name, clickHandler, color, wide,
}) => (
  <div>
    <button type="button" style={color} className={wide} onClick={() => clickHandler(name)}><span>{name}</span></button>
  </div>
);
/* eslint-enable react/prop-types */
export default Button;
