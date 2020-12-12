import React from 'react'
import {
  Container,
  ReturnBtContainer,
  Content
} from '@/globalStyles/pages/play'
import ReturnButton from '@/atoms/ReturnButton'
import PlayMenu from '@/molecules/PlayMenu'
import CloseGroupButton from '@/atoms/CloseGroupButton'
import AddPlayer from '@/molecules/AddPlayer'

const Play: React.FC = () => {
  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <PlayMenu />
      <CloseGroupButton />

      <Content>
        <AddPlayer playerName="foxfears" dataSize={1} />
        <AddPlayer dataSize={2} />
        <h1>Lets play</h1>
      </Content>
    </Container>
  )
}

export default Play
