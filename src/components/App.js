import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  return <div>
    <ButtonPanel />
    <Display />
  </div>

}

export default App;
