import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: 'ArialCustom', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
