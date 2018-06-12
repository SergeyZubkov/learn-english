import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default () => {
	return (
		<Navbar>
		  <Navbar.Header>
		    <Navbar.Brand>
		      Учи английский
		    </Navbar.Brand>
		  </Navbar.Header>
		  <Nav>
		 		<LinkContainer
		 			to='/'
		 			exact
		 		>
		 			<NavItem href='/'>
      			Проверить
    			</NavItem>
		 		</LinkContainer>
				<LinkContainer
		 			to='/dictionary'
		 			exact
		 		>
		 			<NavItem href='/dictionary'>
      			Словарь
    			</NavItem>
		 		</LinkContainer>
		  </Nav>
		</Navbar>
	);
}
