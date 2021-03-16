import React from 'react'
import ReturnButton from '@/atoms/ReturnButton'
import { useRouter } from 'next/router'
import AgentsMenu from '@/molecules/AgentsMenu'
import AgentDescription from '@/molecules/AgentDescription'
import AgentPhoto from '@/molecules/AgentPhoto'
import AgentAbilities from '@/molecules/AgentAbilities'

import {
  Container,
  ReturnBtContainer,
  Content
} from '@/globalStyles/pages/agents'
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
  const router = useRouter()
  const RouteAgent = String(router.query.slug)

  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <Content>
        <AgentDescription RouteAgent={RouteAgent} />
        <AgentPhoto RouteAgent={RouteAgent} />
        <AgentAbilities RouteAgent={RouteAgent} />
      </Content>

      <AgentsMenu RouteAgent={RouteAgent} />
    </Container>
  )
}

export default Agents
