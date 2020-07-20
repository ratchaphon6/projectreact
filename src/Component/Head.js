import React, { Component } from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
class Head extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Navbar color="faded" light>
        <Button href="/" className="mr-auto">Back</Button >
        <NavbarToggler className="mr-2" />
        <Collapse  navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Head;
