import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";

import GlobalStyles from "./components/styles/Global";
import Favourite from "./components/Favourite";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./Home";
import NotFound from "./components/NotFound";


const theme = {
  colors: {
    header: "rgb(247,247,247)",
    body: "rgb(247,247,247)",
    navLink: "rgb(125,125,125)",
    title: "rgb(30,30,30)",
  },
};

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;

`;


function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider backgroundComponent={FadingBackground}>
    
      <GlobalStyles />
      <ToastContainer  autoClose={2000}  />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" component={NotFound}></Route>
      </Routes>
      </ModalProvider>

    </ThemeProvider>
  );
}

export default App;
