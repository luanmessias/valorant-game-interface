import React from 'react'
import FrontLogoSvg from '@/svg/logo-front.svg'
import { Container, CurrentAct } from './Styles'

const FrontLogo: React.FC = () => {
  const animateVariants = {
    initial: {
      opacity: 0,
      scale: 3
    },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 0
      }
    },
    exit: {
      opacity: 0,
      scale: 3,
      transition: { duration: 0.5 }
    }
  }

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animateVariants}
    >
      <FrontLogoSvg />
      <CurrentAct>RETAKE: ACT 1</CurrentAct>
    </Container>
  )
}

export default FrontLogo
