import React from 'react'
import FrontLogoSvg from '@/svg/logo-front.svg'
import { Container, CurrentAct } from './Styles'

const FrontLogo: React.FC = () => {
  return (
    <Container>
      <FrontLogoSvg />
      <CurrentAct>IGNIÇÃO: ATO 3</CurrentAct>
    </Container>
  )
}

export default FrontLogo
