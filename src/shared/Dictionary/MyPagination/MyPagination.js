import React, { Component } from 'react';
import './MyPagination.css';
import {Pagination, Dropdown, MenuItem} from 'react-bootstrap';

import MyToggle from '../../MyToggle/MyToggle';

export default class MyPagination extends Component {
	render() {
		const {
			pages,
			disabledPages,
			activePage,
			onSelectPage,
			activeMonth,
			onChangeMonth,
			availableMonths,
			availableYears
		} = this.props;

		const months = [
			"январь",
			"февраль",
			"март",
			"апрель",
			"май",
			"июнь",
			"июль",
			"август",
			"сентябрь",
			"октябрь",
			"ноябрь",
			"декабрь"
		]

		function isDisabled(currentPage) {
			return disabledPages.some(page => page === currentPage)
		}

		function isDisabledMonth(currentMonthNmb) {
			return availableMonths.indexOf(currentMonthNmb) === -1
		}

		function getMonthName(monthNmb) {
			return months[monthNmb]
		}

		return [
			<div key={1} className="pagination-header">
				<Dropdown id="month" className="my-dropdown">
					<MyToggle bsRole="toggle">
						{getMonthName(activeMonth)}
					</MyToggle>

					<Dropdown.Menu>
						{months.map((m, i) => (
							<MenuItem 
								key={i} 
								active={m === getMonthName(activeMonth)}
								onSelect={() => onChangeMonth(i)}
								disabled={isDisabledMonth(i)}
							>
								{m}
							</MenuItem>
						))}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown id="year" className="my-dropdown">
					<MyToggle bsRole="toggle">2018</MyToggle>

					<Dropdown.Menu>
						{availableYears.map((y, i) => (
							<MenuItem key={i}>{y}</MenuItem>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>,
			<Pagination key={2} bsSize="medium">
				{pages.map((i) => (
					<Pagination.Item 
						key={i} 
						active={i === activePage}
						disabled={isDisabled(i)}
						onClick={() => !isDisabled(i)&&onSelectPage(i)}
					>
						{i}
					</Pagination.Item>
				))}
			</Pagination>
		];
	}
}
