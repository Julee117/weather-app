import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () =>
  <div className="navBar">
    <Button className="homeButton" bsStyle="default"><NavLink to="/" className="buttonName">Home</NavLink></Button>
  </div>

export default Navbar;
