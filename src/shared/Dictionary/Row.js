import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {LinkContainer} from 'react-router-bootstrap';

export default ({word, onRemove}) => {
	const {ru, en, id} = word;

	const wordToParams = () => {
		return `id=${id}&en=${en}&ru=${ru}`
	}
	return (
	<tr>
		<td>{ru}</td>
		<td>{en}</td>
		<td>
			<LinkContainer to={`/dictionary/edit-word/${wordToParams()}`}>
				<Button >
					<FontAwesome name='edit' />
				</Button>
			</LinkContainer>
			<Button onClick={() => onRemove(id)}>
				<FontAwesome name='trash' />
			</Button>
		</td>
	</tr>	
	)
}
