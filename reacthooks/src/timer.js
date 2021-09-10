import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0}
    }
}

render() {
    return <div>
    <p>Seconds: { this.state.seconds }</p>
    <button onClick={this.clearState}>Reset Timer</button>
  </div>
}