import React from 'react';

/* eslint-disable react/prop-types */
const Display = ({ total, next }) => (
  <div>
    <p className="result">{(next && next.toString()) || (total && total.toString()) || '0'}</p>
  </div>
);
/* eslint-enable react/prop-types */
export default Display;
