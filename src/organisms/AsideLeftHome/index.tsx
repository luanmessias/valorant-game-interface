import React from 'react'
import BannerNews from '@/molecules/BannerNews'
import GameModes from '@/molecules/GameModes'
import UpdateNotes from '@/molecules/UpdateNotes'
import { Container } from './Styles'

const AsideLeftHome: React.FC = () => {
  return (
    <Container>
      <BannerNews />
      <UpdateNotes />
      <GameModes />
    </Container>
  )
}

export default AsideLeftHome
