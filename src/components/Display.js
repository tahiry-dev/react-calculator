import React from 'react';

/* eslint-disable react/destructuring-assignment */
class Display extends React.Component {
  constructor() {
    super();

    this.state = { result: 0 };
  }

  render() {
    return (
      <div>
        <p>
          The result is:
          {this.state.result}
        </p>
      </div>
    );
  }
}
/* eslint-enable react/destructuring-assignment */
export default Display;
