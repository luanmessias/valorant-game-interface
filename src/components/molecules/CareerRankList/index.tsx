import React, { useState, useEffect } from 'react'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import PlaceholderTag from '@/atoms/PlaceholderTag'
import Image from 'next/image'
import {
  Container,
  HeadList,
  TitleHead,
  LeaderboardContainer,
  RankList,
  RankItem,
  RankItemPosition,
  RankItemRating,
  RankItemDetails,
  RankItemWon
} from './styles'

interface Leaderboard {
  name: string
  position: number
  rank: number
  rating: number
  team: string
  won: number
}
interface Friend {
  name: string
  activity: string
  status: string
  avatar: string
  card: number
  ranking: number
}

interface Ranking {
  id: number
  name: string
  img: string
}

interface Card {
  id: number
  url: string
}

const CareerRankList = () => {
  const careerData = SwrFetchHook<Leaderboard[]>('/api/leaderboard').data
  const playerData = SwrFetchHook<Friend[]>('/api/friends').data
  const rankingData = SwrFetchHook<Ranking[]>('/api/ranking').data
  const cardsData = SwrFetchHook<Card[]>('/api/cards').data

  if (!careerData || !playerData || !rankingData || !cardsData) {
    return (
      <Container>
        <PlaceholderTag
          width="100%"
          height="300px"
          color="transparent"
          showLoading={true}
        />
      </Container>
    )
  }

  const playerWithCards = playerData.map(player => ({
    ...player,
    cardDetail: cardsData.find(card => card.id === player.card)
  }))

  const fullData = careerData.map(career => ({
    ...career,
    playerDetail: playerWithCards.find(player => player.name === career.name),
    rankingDetail: rankingData.find(rank => rank.id === career.rank)
  }))

  if (!fullData) {
    return (
      <Container>
        <PlaceholderTag
          width="100%"
          height="300px"
          color="transparent"
          showLoading={true}
        />
      </Container>
    )
  }

  console.log(fullData)

  return (
    <Container>
      <LeaderboardContainer>
        <HeadList>
          <TitleHead>RANK</TitleHead>
          <TitleHead>RATING</TitleHead>
          <TitleHead></TitleHead>
          <TitleHead>Ended on 3/2</TitleHead>
        </HeadList>
        <RankList>
          {fullData.map(fd => {
            const {
              name,
              playerDetail,
              position,
              rankingDetail,
              rating,
              team,
              won
            } = fd

            return (
              <RankItem key={position} data-first={position === 1}>
                <RankItemPosition>
                  <strong>{position}</strong>
                </RankItemPosition>
                <RankItemRating>
                  <Image
                    src={`/img/rank-icons/${rankingDetail.img}`}
                    width={45}
                    height={45}
                  />
                  <span>{rating}</span>
                </RankItemRating>
                <RankItemDetails>
                  <Image
                    src={`/img/profile-avatars/${playerDetail.avatar}.png`}
                    width={45}
                    height={45}
                  />
                  <div className="playerInfo">
                    <strong>{name}</strong>
                    <span>{team}</span>
                  </div>
                </RankItemDetails>
                <RankItemWon>
                  <div>
                    <span>{won}</span> GAMES WON
                  </div>
                </RankItemWon>
              </RankItem>
            )
          })}
        </RankList>
      </LeaderboardContainer>
    </Container>
  )
}

export default CareerRankList
