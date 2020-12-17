import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

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
  overflow: hidden;
}


.placeholder:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  animation: load var(--transition-speed-slow) var(--transition-curve) infinite;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BGImage = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-image: url('/img/home_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(10px);
  transform: scale(1.5);
  transition: all 0.5s;

  &[data-route='/'] {
    filter: blur(0px);
    transform: scale(1);
  }
`

export default GlobalStyle
