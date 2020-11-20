import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

html,
body,
#__next{
  width: 100%;
  height: 100%;
}
`;

export default GlobalStyle;
