import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import TestWord from './TestWord';
import Result from './Result';
import DataService from '../../browser/dataService';

export default class Test extends Component {
	constructor(props) {
		super(props);

		let initialState;

		if (props.staticContext) {
			initialState = props.staticContext.initialState;
		} else {
			initialState = window.__initialState__;
			delete window.__initialState__;
		}

		this.state = {
			words: initialState||[],
			currentWordIdx: 0,
			currentTestStage: 'prestart',
			answers: []
		}
	}

	componentDidMount() {
		if (this.state.words) {
			Test.requestInitialState()
			.then(words => this.setState({words}))
		}
	}
	handleTestWord = (testWord) => {
		let {currentWordIdx, words} = this.state;
		console.log(`${words[currentWordIdx].en} - ${testWord} / ${words[currentWordIdx].ru}`)
		this.state.answers.push(testWord);

		if (currentWordIdx < words.length-1) {
			this.setState({currentWordIdx: ++currentWordIdx})
		} else {
			this.setState({currentTestStage: "result"});
		}
	}
	handleStartClick = () => {
		this.setState({currentTestStage: 'test'});
	}
	handleResultExit = () => {
		Test.requestInitialState()
		.then(words => this.setState({
			currentTestStage: 'prestart',
			answers: [],
			currentWordIdx: 0,
			words: words
		}))
	}
	static requestInitialState() {
		return DataService.getWords("select=toRepetition");
	}
	render() {
		const {currentTestStage, words, answers} = this.state;
		let jsx;

		if (currentTestStage == 'prestart') {
			function getPostfix(amount) {
				if (amount == 1) return 'о';
				if (amount > 0 && amount < 5) return "а";
				else return ''
			}

			const wordsAmount = this.state.words.length;
			const postfix = getPostfix(wordsAmount);

			jsx = [
				<p key='paragraph'> К повторению {wordsAmount} слов{postfix} </p>,
				<Button key='btnStart' onClick={this.handleStartClick} disabled={words.length === 0}>Начать</Button>
			]
		} else if (currentTestStage == 'test') {
			let currentWordIdx = this.state.currentWordIdx;
			let currentWord = this.state.words[currentWordIdx];

			jsx = <TestWord key='word' word={currentWord} onTest={this.handleTestWord} />
		} else if (currentTestStage == 'result') {
			jsx = <Result key='result' words={words} answers={answers} onExit={this.handleResultExit} />
		}
		return (
			<div style={{width: "50%", margin: "75px auto", textAlign: "center"}} >
				{jsx}
			</div>
		)
	}
}
