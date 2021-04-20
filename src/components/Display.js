import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props)

        this.state = { result = 0 }
        this.setState({ result = props.answer })
    }


    render() {
        return <div>
            <p>{string(this.state.result)}</p>
        </div>
    }

}

export default Display