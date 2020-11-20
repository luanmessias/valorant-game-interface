import styled, { createGlobalStyle } from 'styled-components';

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

export const Main = styled.div`
  background-image: url('/img/home_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default GlobalStyle;
