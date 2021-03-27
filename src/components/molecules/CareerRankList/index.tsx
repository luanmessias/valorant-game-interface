import React, { useState } from 'react'
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
  RankItemWon,
  PaginateContainer
} from './styles'
import ReactPaginate from 'react-paginate'

import StarSVG from '@/svg/star.svg'
import PagPrevSVG from '@/svg/pag-prev.svg'
import PagNextSVG from '@/svg/pag-next.svg'

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
  const [pageNumber, setPageNumber] = useState(0)

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

  const postsPerPage = 9
  const pagesVisted = pageNumber * postsPerPage
  const pageCount = Math.ceil(fullData.length / postsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayData = fullData
    .slice(pagesVisted, pagesVisted + postsPerPage)
    .map(fd => {
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
          <RankItemPosition data-first={position === 1}>
            <strong>{position}</strong>
            <StarSVG />
          </RankItemPosition>
          <RankItemRating>
            <Image
              src={`/img/rank-icons/${rankingDetail.img}`}
              width={position === 1 ? 75 : 45}
              height={position === 1 ? 75 : 45}
            />
            <span>{rating}</span>
          </RankItemRating>
          <RankItemDetails>
            {position === 1 ? (
              <img
                src={playerDetail.cardDetail.url}
                width="auto"
                height={120}
              />
            ) : (
              <Image
                src={`/img/profile-avatars/${playerDetail.avatar}.png`}
                width={45}
                height={45}
              />
            )}
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
    })
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
  return (
    <Container>
      <LeaderboardContainer>
        <HeadList>
          <TitleHead>RANK</TitleHead>
          <TitleHead>RATING</TitleHead>
          <TitleHead></TitleHead>
          <TitleHead>Ended on 3/2</TitleHead>
        </HeadList>
        <RankList>{displayData}</RankList>
        <PaginateContainer>
          <ReactPaginate
            previousLabel={<PagPrevSVG />}
            nextLabel={<PagNextSVG />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginate'}
            previousLinkClassName={'pagPrev'}
            nextLinkClassName={'pagNext'}
            disabledClassName={'pagDisabled'}
            activeClassName={'pagActive'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={0}
          />
        </PaginateContainer>
      </LeaderboardContainer>
    </Container>
  )
}

export default CareerRankList
