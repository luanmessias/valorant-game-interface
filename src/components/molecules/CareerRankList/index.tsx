import React, { useState, useEffect } from 'react'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import PlaceholderTag from '@/atoms/PlaceholderTag'
import { Container, HeadList, TitleHead } from './styles'

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

const CareerRankList = () => {
  const [data, setData] = useState([])
  const careerData = SwrFetchHook<Leaderboard[]>('/api/leaderboard').data
  const playerData = SwrFetchHook<Friend[]>('/api/friends').data
  const rankingData = SwrFetchHook<Ranking[]>('/api/ranking').data

  if (!careerData || !playerData || !rankingData) {
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

  return (
    <Container>
      <HeadList>
        <TitleHead>RANK</TitleHead>
        <TitleHead>RATING</TitleHead>
        <TitleHead></TitleHead>
        <TitleHead></TitleHead>
        <TitleHead>Ended on 3/2</TitleHead>
      </HeadList>
    </Container>
  )
}

export default CareerRankList
