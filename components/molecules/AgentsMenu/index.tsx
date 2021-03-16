import React from 'react'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import Link from 'next/link'
import AgentListArrowSVG from '@/svg/agents-select-arrow.svg'
import {
  AgentListContainer,
  AgentList,
  AgentListItem,
  AgentItemStage
} from './Styles'

interface IRouteAgent {
  RouteAgent: string
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

const AgentsMenu: React.FC<IRouteAgent> = ({ RouteAgent }: IRouteAgent) => {
  const agents = SwrFetchHook<IAgents[]>('/api/agents').data

  if (!agents) {
    return <p>carregando...</p>
  }

  return (
    <AgentListContainer>
      <AgentList>
        {(agents || []).map(agent => {
          return (
            <Link key={agent.id} href={`/agents/${agent.name}`}>
              <AgentListItem data-active={RouteAgent === agent.name && true}>
                {RouteAgent === agent.name && <AgentListArrowSVG />}
                <AgentItemStage AgentListItem={agent.name}>
                  <div data-agent={agent.name}>
                    <div className="dot dot--TL"></div>
                    <div className="dot dot--TR"></div>
                    <div className="dot dot--BL"></div>
                    <div className="dot dot--BR"></div>
                  </div>
                </AgentItemStage>
              </AgentListItem>
            </Link>
          )
        })}
      </AgentList>
    </AgentListContainer>
  )
}
export default AgentsMenu
