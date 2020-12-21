import styled from 'styled-components'
import { motion } from 'framer-motion'
import { minDevice, maxDevice } from '@/globalStyles/global/device'

export const Container = styled(motion.div)`
  margin-right: auto;
  margin-left: 100px;
  z-index: 1;

  @media ${maxDevice.mobileL} {
    display: none;
  }
`
