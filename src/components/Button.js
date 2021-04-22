import React from 'react';

/* eslint-disable react/prop-types */
const Button = ({ name, clickHandler }) => (
  <div>
    <button type="button" onClick={() => clickHandler(name)}><span>{name}</span></button>
  </div>
);
/* eslint-enable react/prop-types */
export default Button;
