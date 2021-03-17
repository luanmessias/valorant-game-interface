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
  PlayerContent
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
  ranking: number
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

const AddPlayer: React.FC<IAddFriend> = ({
  playerName,
  dataSize,
  onClick,
  children
}) => {
  const profile = SwrFetchHook<IProfile[]>('/api/friends').data
  const cards = SwrFetchHook<ICard[]>('/api/cards').data
  const rankings = SwrFetchHook<IRanking[]>('/api/ranking').data

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

  const getRanking = id => {
    const ranking = (rankings || []).filter(ranking => ranking.id === id)[0].img
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
                <PlayerContent>{children}</PlayerContent>
                <PlayerStatus>READY</PlayerStatus>
                <PlayerName>
                  <ArrowPlayerReadySVG />
                  {player.name}
                </PlayerName>
                <PlayerRanking>
                  <Image
                    src={`/img/rank-icons/${getRanking(player.ranking)}`}
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
