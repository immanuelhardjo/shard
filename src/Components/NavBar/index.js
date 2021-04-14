import React from 'react';
import logo from '../../assets/img/icon_logo.svg';

import {
  Nav,
  NavHome,
  // NavLink,
  // Bars,
  // NavMenu
} from './NavBarElements';

const Navbar = () => {
  return (
    <>
    <div className='NavBar' style={{margin: "1rem"}}>
    <Nav>
        <NavHome to='/shard/'>
          <img src={logo} alt='Logo' height = '30px' />
        </NavHome>
        {/* <Bars />
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
        </NavMenu> */}
      </Nav>
    </div>
    </>
  );
};

export default Navbar;