import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: 'ArialCustom', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: clip;
  /* overflow-x: hidden; */
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1,p{
  margin: 0px;
  padding: 0px;
}
`;

export default GlobalStyles;
