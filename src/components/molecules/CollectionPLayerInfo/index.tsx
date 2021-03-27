import React from 'react'
import { Container, Card, Spray, Title } from './styles'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import PlaceholderTag from '@/atoms/PlaceholderTag'

interface Profile {
  name: string
  activity: string
  status: string
  avatar: string
  card: number
  ranking: number
}

interface Card {
  id: number
  url: string
}
const CollectionPLayerInfo = () => {
  const playerData = SwrFetchHook<Profile[]>('/api/friends').data
  const cardsData = SwrFetchHook<Card[]>('/api/cards').data

  if (!playerData || !cardsData) {
    return (
      <Container data-preloader="true">
        <PlaceholderTag
          width="100%"
          height="300px"
          color="transparent"
          showLoading={true}
        />
      </Container>
    )
  }

  const player = playerData.find(p => p.name === 'roxfears')
  const card = cardsData.find(c => c.id === player.card)
  return (
    <Container>
      <Card>
        <Title>PLAYER CARD</Title>
        <span>{player.name}</span>
        <img src={card.url} alt={`${player.name} card`} />
      </Card>

      <Spray>
        <img src="/img/sprays/bear.gif" />
        <span>PREROUND SPRAY</span>
      </Spray>
      <Spray>
        <img src="/img/sprays/killjoy.png" />
        <span>MIDROUND SPRAY</span>
      </Spray>
      <Spray>
        <img src="/img/sprays/tool.png" />
        <span>POSTROUND SPRAY</span>
      </Spray>
    </Container>
  )
}

export default CollectionPLayerInfo
