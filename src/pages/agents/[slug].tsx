import React, { useState } from 'react'
import {
  Container,
  ReturnBtContainer,
  Content,
  NameCont,
  PhotoCont,
  AbilitiesCont,
  ArtToggle,
  ArtContent,
  Art2D,
  Art3D,
  CharacterList
} from '@/globalStyles/pages/agents'
import ReturnButton from '@/atoms/ReturnButton'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface IRoles {
  name: string
  description: string
}

interface IAgents {
  id: number
  name: string
  role: string
  abilities: [
    {
      id: number
      name: string
      description: string
      video: string
    }
  ]
}

const Agents: React.FC<IAgents | IRoles> = (): JSX.Element => {
  const [changeArt, setChangeArt] = useState(true)
  const agents = SwrFetchHook<IAgents[]>('agents').data
  const roles = SwrFetchHook<IRoles[]>('roles').data
  const router = useRouter()
  const agentImageToRender = String(
    changeArt ? `${router.query.slug}_3d` : router.query.slug
  )

  if (!agents) {
    return <p>carregando...</p>
  }

  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>
      <Content>
        <NameCont />
        <PhotoCont>
          <ArtToggle data-active={changeArt}>
            <Art2D className="Art2D" onClick={() => setChangeArt(false)}>
              2D
            </Art2D>
            <Art3D className="Art3D" onClick={() => setChangeArt(true)}>
              3D
            </Art3D>
          </ArtToggle>
          <ArtContent AgentName={agentImageToRender} data-art={changeArt} />
        </PhotoCont>
        <AbilitiesCont />

        <CharacterList>
          {agents.map(agent => {
            return (
              <li key={agent.id}>
                <Link href={`/agents/${agent.name}`}>{agent.name}</Link>
              </li>
            )
          })}
        </CharacterList>
      </Content>
    </Container>
  )
}

export default Agents
