import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FormControl} from 'react-bootstrap';

export default class TestWord extends Component {
	state = {
		value: ''
	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.input).focus();
	}
	handleChange = (e) => {
		this.setState({value: e.target.value});
	}
	render() {
		return [
			<div key='test-word'>{this.props.word.ru}</div>,
			<FormControl 
				key='answer'
				type='text' 
				value={this.state.value} 
				onChange={this.handleChange} 
				ref={(i) => this.input = i}
				onKeyPress={(e) => {
					if (e.key !== 'Enter') return;
					this.setState({value: ''});
					this.props.onTest(this.state.value);
				}}
			/>
		];
	}
}
