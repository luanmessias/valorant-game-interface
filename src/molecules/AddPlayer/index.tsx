import React, { useState } from 'react'
import { Container, PlayerStage, EmptyPlayer, MainPlayer } from './Styles'
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
  const [selectedPlayer, setSelectedPLayer] = useState(undefined)

  const profile = SwrFetchHook<IProfile[]>('friends').data

  if (!profile) {
    return <p>carregando...</p>
  }

  console.log(playerName)

  return (
    <>
      {playerName &&
        (profile || [])
          .filter(p => p.name === playerName)
          .map(player => (
            <PlayerStage key={player.name} data-size={dataSize}>
              <MainPlayer>
                <h1>{player.name}</h1>
              </MainPlayer>
            </PlayerStage>
          ))}

      {!playerName && (
        <PlayerStage data-size={dataSize}>
          <EmptyPlayer>+</EmptyPlayer>
        </PlayerStage>
      )}
    </>
  )
}

export default AddPlayer
