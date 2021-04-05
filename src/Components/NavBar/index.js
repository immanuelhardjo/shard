import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          /
          <NavLink to='/stories' activeStyle>
            Stories
          </NavLink>
          /
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;