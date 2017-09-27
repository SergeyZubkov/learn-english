import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Test from './Test';
import Dictionary from './Dictionary';
import Add from './Add';
import {LinkContainer} from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-header">
           <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to='/'>Learn-English</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to='/' exact>
                    <NavItem eventKey={1}>Тест</NavItem>
                  </LinkContainer>
                  <LinkContainer to='/add'>
                    <NavItem eventKey={2}>Добавить</NavItem>
                  </LinkContainer>
                  <LinkContainer to='/dictionary'>
                    <NavItem eventKey={3}>Словарь</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div
            className='app-content'
          >
            <Route exact path='/'component={Test}/>
            <Route path='/dictionary'component={Dictionary}/>
            <Route path='/add'component={Add}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
