import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: 'ArialCustom', sans-serif;
  background: rgba(24,24,24,1);
  margin: 0;
  
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
