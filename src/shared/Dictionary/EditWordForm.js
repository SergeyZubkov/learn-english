import React, { Component } from 'react';

import WordForm from './WordForm';

export default (props) => {
	const {id, en, ru} = props.match.params;
	return (
		<WordForm id={id} en={en} ru={ru} mode="edit"/>
	);
}
