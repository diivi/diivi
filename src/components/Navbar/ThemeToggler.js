// Toggle.js
import React from "react";
import { func, string } from "prop-types";

import Toggler from "../styles/ThemeToggler.styled";
import { ReactComponent as MoonIcon } from "../../assets/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";

const ThemeToggler = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <Toggler lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </Toggler>
  );
};

ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ThemeToggler;
