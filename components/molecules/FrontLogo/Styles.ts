import styled from 'styled-components'
import { motion } from 'framer-motion'
import { minDevice, maxDevice } from '@/globalStyles/global/device'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;

  @media ${maxDevice.mobileL} {
    padding: 10px;
    position: inherit;
    width: 100%;
    display: none;
  }
`

export const CurrentAct = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dd555c;
  height: 35px;
  width: 100%;
  font-size: 26px;
  color: #fff;
  margin-top: 15px;
  letter-spacing: 10px;
`
