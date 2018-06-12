import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';
import moment from 'moment';

import DataService from '../../browser/dataService';
import {Link} from 'react-router-dom';

export default class WordForm extends Component {
	static contextTypes = {
		router: PropTypes.shape({
			history: PropTypes.object.isRequired,
		})
	}
	constructor(props) {
		super(props);

		this.defaultState = {
			id: this.props.id||null,
			mode: props.mode,
			en: props.en||'',
			ru: props.ru&&decodeURIComponent(props.ru)||''
		}

		this.state = this.defaultState;
	}

	focusToInput() {
			let node = ReactDOM.findDOMNode(this.input);
			if (node && node.focus instanceof Function) {
					node.focus();
			}
	}

	componentDidMount() {
		this.focusToInput();
	}

	handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}
	handleSubmit = () => {
		const {id, en, ru, createdDate, repetitionDate, repetitionCount} = this.state;

		const word = {id, en, ru , createdDate, repetitionDate, repetitionCount};

		if (this.state.mode == 'create') {
			const initialData = {
				createdDateISO: moment().toISOString(),
				repetitionDate: moment().add(5, 'm').toISOString(),
				repetitionCount: 0,
				attemptCount: 0
			}
			this.createOnServer({...word, ...initialData});

			this.setState(this.defaultState);
			this.focusToInput();
		} else if (this.state.mode == 'edit') {
			this.updateOnServer(word);

			this.context.router.history.goBack();
		}

		console.log(word);
	}
	createOnServer(word) {
		DataService.createWord(word);
	}
	updateOnServer(word) {
		DataService.updateWord(word);
	}
	render() {
		return (
			<form style={{width: "25%", margin: '75px auto'}}>
				<FormGroup>
					<ControlLabel>
						по-английский
					</ControlLabel>
					<FormControl
						name="en"
						type='text'
						value={this.state.en}
						onChange={this.handleInputChange}
						ref={(input) => this.input = input}
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>
						по-русски
					</ControlLabel>
					<FormControl
						name="ru"
						type='text'
						value={this.state.ru}
						onChange={this.handleInputChange}
					/>
				</FormGroup>
				<Button onClick={this.handleSubmit}>{this.state.mode === 'edit' ? 'Изменить' : 'Добавить'}</Button>
				<Link to='/dictionary' style={{marginLeft: 80, fontSize: 11}}> обратно в словарь </Link>
			</form>
		);  
	}
}
