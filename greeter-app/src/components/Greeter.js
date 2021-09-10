import React from 'react';

class Greeter extends React.Component {
    render() {
		return (
			<h1>Hello again, {this.props.name}!</h1>
		);
	}
  // Make Greeter return some JSX
}

export default Greeter;