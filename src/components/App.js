import React, { useState, Fragment } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

const App = () => {
  const [newState, setNewState] = useState({
    total: '',
    next: '',
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = Calculate(newState, buttonName);
    setNewState({ ...newState });
  };

  const { total, next } = newState;

  return (
    <Fragment>
      <Display total={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </Fragment>
  );
};

export default App;
