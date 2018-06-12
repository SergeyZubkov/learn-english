import React, { Component } from 'react';
import {
	Table,
	Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import moment from 'moment';

import DataService from '../../browser/dataService';
import Row from './Row';
import MyPagination from './MyPagination/MyPagination';

export default class Dictionary extends Component {
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
			words: initialState&&initialState.wordsLastDay||[],
			activePage: initialState&&Math.max(...initialState.daysHaveEntries)||null,
			daysHaveEntries: initialState&&initialState.daysHaveEntries||[],
			wordsCount: initialState&&initialState.wordsCount||0,
			yearsHaveEntries: initialState&&initialState.yearsHaveEntries||[],
			monthsHaveEntries: initialState&&initialState.monthsHaveEntries||[],
			activeYear: initialState&&this.getRecent(initialState.yearsHaveEntries)||null,
			activeMonth: initialState&&this.getRecent(initialState.monthsHaveEntries)||null
		}		
	}

	componentDidMount() {
		if (!this.state.words.length) {
			Dictionary
			.requestInitialState()
			.then(initialState => {
				this.setState({
					words: initialState.wordsLastDay, 
					wordsCount: initialState.wordsCount,
					yearsHaveEntries: initialState.yearsHaveEntries,
					monthsHaveEntries: initialState.monthsHaveEntries,
					daysHaveEntries: initialState.daysHaveEntries,
					activePage: Math.max(...initialState.daysHaveEntries),
					activeYear: initialState&&this.getRecent(initialState.yearsHaveEntries)||null,
					activeMonth: initialState&&this.getRecent(initialState.monthsHaveEntries)||null
				})
			})
		}
	}

	handleRemoveWord = (id) => {
		DataService.removeWord(id)
		.then(() => this.setState({
			words: this.state.words.filter(word => word.id !== id)
		}))
	}

	handleSelectPage = (selectedDate) => {
		if (this.state.activePage !== selectedDate) {
			DataService.getWordsByDate({
				year: this.state.activeYear,
				month: this.state.activeMonth,
				date: selectedDate
			})
			.then(words => {
				this.setState({
					words,
					activePage: selectedDate
				})
			})
			.catch(err => console.log(err))
		}
	}

	handleChangeMonth = (newActiveMonth) => {
		if (this.state.activeMonth === newActiveMonth) return;

		DataService.getWordsByMonth({
			year: this.state.activeYear,
			month: newActiveMonth
		})
		.then(res => {
			const {daysHaveEntries, wordsLastDay} = res;

			this.setState({
				words: wordsLastDay,
				activeMonth: newActiveMonth,
				daysHaveEntries,
				activePage: Math.max(...daysHaveEntries)
			})
		})
	}

	static requestInitialState() {
		return DataService.getInitialStateForDictionary();
	}

	getRecent(arr) {
		return Math.max(...arr);
	}

	render() {
		const {
			words,
			activePage,
			wordsCount,
			yearsHaveEntries,
			monthsHaveEntries,
			daysHaveEntries,
			activeMonth
		} = this.state;

		const rows = words&&words.map(
			(word, i) => <Row key={i} word={word} onRemove={this.handleRemoveWord} />
		)

		const recentMonth = moment().set({
			"year": this.getRecent(yearsHaveEntries), 
			"month": this.getRecent(monthsHaveEntries)
		});
		const pages = Array.from({length: recentMonth.daysInMonth()}, (i, idx) => idx+1);

		const disabledPages = pages.filter(p => daysHaveEntries.indexOf(p) === -1)

		return (
			<div style={{width: "50%", margin: '75px auto'}}>
				<span>{`Слов в словаре: ${wordsCount}`}</span>
				<p key='add-word'>
					<LinkContainer to="/dictionary/create-word" exact> 
						<Button>Добавить</Button>
					</LinkContainer>
				</p>
				<Table key='table' striped bordered condensed hover >
					<tbody>
						{rows}
					</tbody>
				</Table>
				<MyPagination 
					key="my-pagination"
					activePage={activePage} 
					disabledPages={disabledPages} 
					pages={pages} 
					activeMonth={activeMonth}
					availableMonths={monthsHaveEntries}
					availableYears={yearsHaveEntries}
					onChangeMonth={this.handleChangeMonth}
					onSelectPage={this.handleSelectPage}
				/>
			</div>
		);
	}
}
