import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Logo from "./assets/logo.jpeg";

const App = () => (
  <>
    <GlobalStyle />
    <img id="mainImage" src={Logo} alt="Semana Engenharia logo" />
    <Routes />
  </>
);

export default App;
