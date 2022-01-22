import logo from "./logo.svg";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Routes } from "react-router";

import GlobalStyles from "./components/styles/Global";

import Favourite from "./components/Favourite";
import About from "./components/About";
import Header from "./components/Header";
import Default from "./Default";

const theme = {
  colors: {
    header: "rgb(247,247,247)",
    body: "rgb(247,247,247)",
    navLink: "rgb(125,125,125)",
    title: "rgb(30,30,30)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
