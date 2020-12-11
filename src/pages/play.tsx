import React from 'react'
import { Container, ReturnBtContainer } from '@/globalStyles/pages/play'
import ReturnButton from '@/atoms/ReturnButton'
import PlayMenu from '@/molecules/PlayMenu'
import CloseGroupButton from '@/atoms/CloseGroupButton'

const Play: React.FC = () => {
  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <PlayMenu />
      <CloseGroupButton />

      <h1>Lets play</h1>
    </Container>
  )
}

export default Play
