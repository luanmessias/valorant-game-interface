import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  margin-right: auto;
  left: 100px;
  position: absolute;
  z-index: 1;
  transition: all 0.5s;

  &[data-ishome='false'] {
    left: -300px;
  }
`
