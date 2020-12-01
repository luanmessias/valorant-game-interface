import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`
export const Content = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  background-color: #ccc;
`
