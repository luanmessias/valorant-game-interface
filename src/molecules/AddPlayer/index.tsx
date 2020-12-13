import React from 'react'
import Image from 'next/image'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import ArrowPlayerReadySVG from '@/svg/player-ready-arrow-icon.svg'

import {
  PlayerStage,
  EmptyPlayer,
  MainPlayer,
  PlayerStatus,
  PlayerName,
  PlayerRanking,
  FormPlayer,
  PlusButton
} from './Styles'

interface IAddFriend {
  playerName?: string
  dataSize: number
  onClick?: any
}

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
  card: number
}

interface ICard {
  id: number
  url: string
}

interface IRanking {
  id: number
  name: string
  img: string
}

const AddPlayer: React.FC<IAddFriend> = ({ playerName, dataSize, onClick }) => {
  const profile = SwrFetchHook<IProfile[]>('friends').data
  const cards = SwrFetchHook<ICard[]>('cards').data
  const rankings = SwrFetchHook<IRanking[]>('ranking').data

  if (!profile) {
    return <p>carregando...</p>
  }

  if (!cards) {
    return <p>carregando...</p>
  }

  if (!rankings) {
    return <p>carregando...</p>
  }

  const getCard = id => {
    const card = cards.filter(card => card.id === id)[0].url
    return card
  }

  const getRandomRanking = () => {
    const randomNumber = Math.floor(Math.random() * 22) + 1
    const ranking = (rankings || []).filter(
      ranking => ranking.id === randomNumber
    )[0].img
    return ranking
  }

  return (
    <>
      {playerName &&
        (profile || [])
          .filter(p => p.name === playerName)
          .map(player => (
            <PlayerStage key={player.name} data-size={dataSize}>
              <MainPlayer CardImage={getCard(player.card)}>
                <PlayerStatus>READY</PlayerStatus>
                <PlayerName>
                  <ArrowPlayerReadySVG />
                  {player.name}
                </PlayerName>
                <PlayerRanking>
                  <Image
                    src={`/img/rank-icons/${getRandomRanking()}`}
                    width={60}
                    height={60}
                  />
                </PlayerRanking>
              </MainPlayer>
            </PlayerStage>
          ))}

      {!playerName && (
        <PlayerStage onClick={onClick} data-size={dataSize}>
          <EmptyPlayer>+</EmptyPlayer>
        </PlayerStage>
      )}
    </>
  )
}

export default AddPlayer
