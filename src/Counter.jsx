import React from 'react';

class Counter extends React.Component {
	state = {
		value: 10
	};

	render() {
		return (
			<div>
			The value is: {this.state.value} <br/>
			<button className="increaseButton"
				onClick={e => this.setState({ value: this.state.value + 1})}>Increase</button>
			</div>
		)
	}
}

export default Counter;
