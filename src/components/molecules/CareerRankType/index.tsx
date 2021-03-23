import React from 'react'
import Image from 'next/image'

import { Container, RatingContent, RatingTitle, RatingEpisode } from './styles'

const CareerRankType = () => {
  return (
    <Container>
      <RatingContent>
        <Image width={65} height={65} src="/img/rank-icons/gold-1.png" />
      </RatingContent>
      <RatingTitle>
        <div className="container">
          <span>LEADERBOARD</span>
          <strong>GOLD</strong>
        </div>

        <div className="dot dot--tl" />
        <div className="dot dot--tr" />
        <div className="dot dot--bl" />
        <div className="dot dot--br" />
      </RatingTitle>
      <RatingEpisode>
        <div className="container">
          <span>EPISODE 2</span>
          <strong>ACT 1</strong>
        </div>

        <div className="dot dot--tl" />
        <div className="dot dot--tr" />
        <div className="dot dot--bl" />
        <div className="dot dot--br" />
      </RatingEpisode>
    </Container>
  )
}

export default CareerRankType
