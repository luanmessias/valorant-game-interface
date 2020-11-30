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
#__next {
  background-image: url('/img/home_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
`

export const Main = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default GlobalStyle
