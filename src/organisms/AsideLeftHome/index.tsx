import React from 'react'
import BannerNews from '@/molecules/BannerNews'
import GameModes from '@/molecules/GameModes'
import UpdateNotes from '@/molecules/UpdateNotes'
import { Container } from './Styles'

const AsideLeftHome: React.FC = () => {
  const animateVariants = {
    initial: {
      opacity: 0,
      transform: 'translateX(-300px)'
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: {
        duration: 0.3,
        delay: 0
      }
    },
    exit: {
      opacity: 0,
      transform: 'translateX(-700px)',
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
      <BannerNews />

      <UpdateNotes />
      <GameModes />
    </Container>
  )
}

export default AsideLeftHome
