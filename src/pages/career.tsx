import React from 'react'
import ReturnButton from '@/atoms/ReturnButton'
import {
  Container,
  ReturnBtContainer,
  Content
} from '@/globalStyles/pages/career'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import CareerMenu from '@/molecules/CareerMenu'
import CareerRankType from '@/molecules/CareerRankType'

interface Leaderboard {
  name: string
  position: number
  rank: number
  rating: number
  team: string
  won: number
}

interface RootObject {
  leaderboard: Leaderboard[]
}

const Career = () => {
  const careerData = SwrFetchHook<RootObject[]>('/api/leaderboard').data

  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <Content>
        <CareerMenu />

        <CareerRankType />
      </Content>
    </Container>
  )
}
export default Career
