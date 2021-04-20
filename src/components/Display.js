import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props)

        this.state = { result: 0 }

    }


    render() {
        return <div>
            <p>The result is: {this.state.result}</p>
        </div>
    }

}

export default Display