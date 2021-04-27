import React, { useState } from 'react';
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
    const currentState = Calculate(newState, buttonName);
    setNewState({ ...currentState });
  };

  const { total, next } = newState;

  return (
    <div>
      <Display total={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
