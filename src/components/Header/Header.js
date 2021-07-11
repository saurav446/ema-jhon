import React from 'react';
import logo from '../../images/logo.png';
import { UserAuth } from '../Login/UserAuth';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const userAuth = UserAuth();

  return (
    <div className="header-logo">
      <img src={logo} alt="" />
      <Navbar expand="lg"  >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar/-nav">
          <Nav className="m-auto">
            <a href="/shop"> Shop </a>
            <a href="/review"> Order Review </a>
            <a href="/inventory"> Manage Inventory </a>
            {userAuth.user && (
              <span className="mr-3" style={{ color: 'yellow' }}> {userAuth.user.name} </span>
            )}
            {userAuth.user ? (
              <a href="/login" > Sign Out </a>
            ) : (
              <a href="/login"> Sign IN </a>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </div>
  );
};

export default Header;
