import React from "react";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "./aesthetics/Themes";
import { GlobalStyles } from "./aesthetics/globalStyles";

import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Contact from "./pages/Contact";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/friends" component={Friends} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/404" />
      </Switch>
      <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
    </ThemeProvider>
  );
}

export default App;
