import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  width: 30px;
  height: 30px;

  .ValorantGameLink {
    display: block;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`
