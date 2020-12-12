import React, { useState } from 'react'
import { Container } from './Styles'
import SwrFetchHook from '@/hooks/SwrFetchHook'

interface IAddFriend {
  playerName?: string
  dataSize: number
}

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
}

const AddPlayer: React.FC<IAddFriend> = ({ playerName, dataSize }) => {
  const profile = SwrFetchHook<IProfile[]>('friends').data

  if (!profile) {
    return <p>carregando...</p>
  }

  const defaultProfile = profile.filter(p => p.status === 'me')[0].status
  const [selectedPlayer, setSelectedPLayer] = useState(defaultProfile)

  return (
    <>
      {playerName &&
        (profile || [])
          .filter(p => p.name === selectedPlayer)
          .map(player => (
            <Container key={player.name} data-size={dataSize}>
              <h1>asdasd</h1>
            </Container>
          ))}

      {!playerName && <Container></Container>}
    </>
  )
}

export default AddPlayer
