import React from 'react'
import ModeRankedSVG from '@/svg/gm-ranked.svg'
import ModeSpikeSVG from '@/svg/gm-spike.svg'
import ModeDMSVG from '@/svg/gm-deathmath.svg'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { Container, Content, DecorativeBar, ModeBox, Title } from './Styles'

interface IGameMode {
  id: string
  position: number
  title: string
  time: string
}

const GameModes: React.FC = () => {
  const { data } = SwrFetchHook<IGameMode[]>('/api/game_modes')

  function getGameModeSymbol(mode: string): JSX.Element {
    switch (mode) {
      case 'ranked':
        return <ModeRankedSVG />
        break
      case 'casual':
        return <ModeRankedSVG />
        break
      case 'spike':
        return <ModeSpikeSVG />
        break
      case 'dm':
        return <ModeDMSVG />
        break
      default:
        return <ModeRankedSVG />
    }
  }

  return (
    <Container>
      <DecorativeBar />
      <Title>MOST PLAYED MODES</Title>
      <Content>
        {data?.map(gm => {
          return (
            <ModeBox key={gm.id}>
              <div className="symbol">{getGameModeSymbol(gm.id)}</div>
              <div className="name">{gm.title}</div>
              <div className="time">{gm.time}</div>
            </ModeBox>
          )
        })}
      </Content>
      <DecorativeBar />
    </Container>
  )
}

export default GameModes
