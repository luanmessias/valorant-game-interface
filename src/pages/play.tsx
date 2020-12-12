import React from 'react'
import ReturnButton from '@/atoms/ReturnButton'
import PlayMenu from '@/molecules/PlayMenu'
import CloseGroupButton from '@/atoms/CloseGroupButton'
import AddPlayer from '@/molecules/AddPlayer'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import Loading from '@/atoms/Loading'
import {
  Container,
  ReturnBtContainer,
  Content
} from '@/globalStyles/pages/play'

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
}

const Play: React.FC = (): JSX.Element => {
  const profile = SwrFetchHook<IProfile[]>('friends').data

  if (!profile) {
    return <Loading />
  }

  const loggedProfile = profile.filter(p => p.status === 'me')[0].name

  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <PlayMenu />
      <CloseGroupButton />

      <Content>
        <AddPlayer dataSize={3} />
        <AddPlayer dataSize={2} />
        <AddPlayer playerName={loggedProfile} dataSize={1} />
        <AddPlayer dataSize={2} />
        <AddPlayer dataSize={3} />
      </Content>
    </Container>
  )
}

export default Play
