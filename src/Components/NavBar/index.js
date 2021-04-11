import React from 'react';
import logo from '../../assets/img/icon_logo.svg';

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
        <NavLink to='/shard/'>
          <img src={logo} alt='Logo' height = '30px' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/shard/projects' activeStyle>
            Projects
          </NavLink>
          /
          <NavLink to='/shard/stories' activeStyle>
            Stories
          </NavLink>
          /
          <NavLink to='/shard/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;