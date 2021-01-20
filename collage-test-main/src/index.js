import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
html{
  width:1000px;
  height:500px;
  background-color:red;
}
*{ box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: Inder, sans-serif}
    &::-webkit-scrollbar {
  display: none;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);