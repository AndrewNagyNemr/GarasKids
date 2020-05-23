import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {Navbar, Nav} from 'react-bootstrap';

import './CustomNavbar.css';

class CustomNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">GARAS Kids</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <ul className="list-unstyled">
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  <span className="fa fa-home icon"></span>
                  <span className="text">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/dashboard" activeClassName="selected">
                  <span className="fa fa-tachometer icon"></span>
                  <span className="text">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/children" activeClassName="selected">
                  <span className="fa fa-child icon"></span>
                  <span className="text">Children</span>
                </NavLink>
              </li>
            </ul>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
