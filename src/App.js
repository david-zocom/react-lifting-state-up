import React from 'react';
import './App.css';
import Input from './Input';
import Status from './Status';

class App extends React.Component {
	state = { inputValue: '42' }
	setInputValue = newValue => {
		this.setState({ inputValue: newValue });
	}
	render() {
		return (
			<div className="App">
			<Input value={this.state.inputValue}
				liftValue={this.setInputValue} />
			<Status data={this.state.inputValue} />
			</div>
		);
	}
}

export default App;
