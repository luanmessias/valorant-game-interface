import React from 'react'
import Image from 'next/image'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { NameCont, AgentInfo, AgentRole, RoleDescription } from './Styles'

interface IRouteAgent {
  RouteAgent: string
}

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

const AgentDescription: React.FC<IRouteAgent> = ({
  RouteAgent
}: IRouteAgent) => {
  const agents = SwrFetchHook<IAgents[]>('/api/agents').data
  const roles = SwrFetchHook<IRoles[]>('/api/roles').data

  if (!agents) {
    return <p>carregando...</p>
  }

  if (!roles) {
    return <p>carregando...</p>
  }

  return (
    <>
      {(agents || [])
        .filter(a => a.name === RouteAgent)
        .map(agent => (
          <NameCont key={agent.id}>
            <AgentInfo>
              <h1>{agent.name}</h1>

              <span>{'// ROLE'}</span>
              <AgentRole>
                <Image
                  src={`/img/roles/${agent.role}.png`}
                  width={41}
                  height={41}
                />
                <span>{agent.role}</span>
              </AgentRole>

              {(roles || [])
                .filter(r => r.name === agent.role)
                .map(role => (
                  <RoleDescription key={role.name}>
                    <div>
                      {role.description.split('\n').map(function (item, idx) {
                        return (
                          <span key={idx}>
                            {item}
                            <br />
                            <br />
                          </span>
                        )
                      })}
                    </div>
                  </RoleDescription>
                ))}
            </AgentInfo>
          </NameCont>
        ))}
    </>
  )
}
export default AgentDescription
