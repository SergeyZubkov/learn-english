	import React, { Component } from 'react';
	import {Table, Button} from 'react-bootstrap';
	import moment from 'moment';

	import DataService from '../../browser/dataService';

	export default class Result extends Component {
		constructor(props) {
			super(props);

			this.state = {
				results: props.words.map((word, i) => ({word, answer: props.answers[i], isRight: this.isRight(word, props.answers[i])}))
			}
		}
		componentDidMount() {
			const getNextInterval = (repetitionCount) => {
					// Y = 2X + 1
					// Y = новый интервал в днях, X - предидущий интервал
				if (repetitionCount === 0) return 0;
				if (repetitionCount === 1) return 1;

				return 2 * getNextInterval(repetitionCount-1) + 1;
			}
			this.state.results.forEach(
				(result) => {
					let word = result.word,
							interval;
					if (result.isRight) {
						word.repetitionCount++;
						interval = getNextInterval(word.repetitionCount);
					} else {
						if (word.repetitionCount !== 0) {
							word.repetitionCount--;
						}
						interval = getNextInterval(word.repetitionCount);
					}
					word.repetitionDate = moment().add(interval, 'day');
					DataService.updateWord(word)
				}
			)
		}
		isRight(word, answer) {
			console.log(word);
			console.log(answer);
			return word.en.trim() === answer.trim();
		}
		render() {
			const {words, answers} = this.props;
			const Row = ({word, answer, isRight}) => (
				<tr  className={isRight ? "success" : "danger"}>
					<td>{word.en}</td>
					<td>{word.ru}</td>
					<td>{answer}</td>
				</tr>
			)
			return [
				<Table key='table' striped bordered condensed hover >
					<thead>
						<tr>
							<th>EN</th>
							<th>RU</th>
							<th>Ответ</th>
						</tr>
					</thead>
					<tbody>
						{words.map(
							(word, i) => <Row word={word} answer={answers[i]} key={i} isRight={this.isRight(word, answers[i])} />
						)}
					</tbody>
				</Table>,
				<Button key="button-ok" onClick={this.props.onExit}>OK</Button>
			];
		}
	}
