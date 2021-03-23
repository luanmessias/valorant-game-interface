import React from 'react'
import ReturnButton from '@/atoms/ReturnButton'
import {
  Container,
  ReturnBtContainer,
  Content
} from '@/globalStyles/pages/career'

import CareerMenu from '@/molecules/CareerMenu'
import CareerRankType from '@/molecules/CareerRankType'
import CareerRankList from '@/molecules/CareerRankList'

const Career = () => {
  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <Content>
        <CareerMenu />

        <CareerRankType />

        <CareerRankList />
      </Content>
    </Container>
  )
}
export default Career
