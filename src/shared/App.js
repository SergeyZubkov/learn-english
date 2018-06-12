import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import routes from './routes';
import './App.css';
import Test from './Test/Test';
import Dictionary from './Dictionary/Dictionary';
import NavBar from './NavBar';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return [
			<NavBar key={'navbar'} />,
			<Grid key={'content'}>
				<Row>
					<Col md={12}>
						<Switch>
							{routes.map((route, i) => <Route key={i} {...route} />)}
						</Switch>
					</Col>
				</Row>
			</Grid>
		]
	}
}

export default App;