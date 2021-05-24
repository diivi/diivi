import React from "react";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "./aesthetics/Themes";
import { GlobalStyles } from "./aesthetics/globalStyles";

import Navbar from "./components/Navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Random from "./pages/Random";
import PublicRandom from "./pages/PublicRandom";
y


const reload = () => window.location.reload();

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
        <Route path="/random" component={PublicRandom} />
        <Route path="/masti" component={Random} />
        <Route path="/threedivi" onEnter={reload} />
        <Route path="/covida" onEnter={reload} />
        <Redirect to="/404" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
