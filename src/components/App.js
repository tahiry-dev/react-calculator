import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: '',
      next: '',
      operation: null,
    };

  }

  handleClick(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Display total={this.total} next={this.next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
