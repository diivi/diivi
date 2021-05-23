import React from 'react';
import ThemeToggler from "./ThemeToggler";
import {
  Nav,
  NavLink,
  NavMenu,
} from "../styles/Navbar.styled.js";


const Navbar = ({theme,toggleTheme}) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/friends">
            Friends
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
