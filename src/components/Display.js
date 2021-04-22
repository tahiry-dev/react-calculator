import React from 'react';

const Display = ({ total, next }) => {

  return <div>
    <p>{(next && next.toString()) || (total && total.toString()) || '0'}</p>
  </div>
}

export default Display;
