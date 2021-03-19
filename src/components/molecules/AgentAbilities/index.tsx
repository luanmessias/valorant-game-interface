import React, { useState } from 'react'
import Image from 'next/image'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import LoadingLoop from '@/atoms/LoadingLoop'

import {
  AbilitiesCont,
  AbilitiesTab,
  Ability,
  AbilitieDescription,
  AbilityVideoContainer,
  AbilityVideo
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

const AgentAbilities: React.FC<IRouteAgent> = ({ RouteAgent }: IRouteAgent) => {
  const agents = SwrFetchHook<IAgents[]>('/api/agents').data
  const [activeAbility, setActiveAbility] = useState(1)

  if (!agents) {
    return <p>carregando...</p>
  }

  return (
    <>
      {(agents || [])
        .filter(a => a.name === RouteAgent)
        .map(agent => (
          <AbilitiesCont key={agent.id}>
            <h1>special abilities</h1>
            <AbilitiesTab
              onLoad={() => setActiveAbility(1)}
              ActiveAbility={activeAbility}
            >
              <Ability onClick={() => setActiveAbility(1)}>
                <Image
                  src={`/img/abilities/${agent.name}/1.png`}
                  width={41}
                  height={41}
                />
              </Ability>
              <Ability onClick={() => setActiveAbility(2)}>
                <Image
                  src={`/img/abilities/${agent.name}/2.png`}
                  width={41}
                  height={41}
                />
              </Ability>
              <Ability onClick={() => setActiveAbility(3)}>
                <Image
                  src={`/img/abilities/${agent.name}/3.png`}
                  width={41}
                  height={41}
                />
              </Ability>
              <Ability onClick={() => setActiveAbility(4)}>
                <Image
                  src={`/img/abilities/${agent.name}/4.png`}
                  width={41}
                  height={41}
                />
              </Ability>
              <AbilitieDescription>
                <div>
                  <strong>{agent.abilities[activeAbility - 1].name}</strong>
                  <span>{agent.abilities[activeAbility - 1].description}</span>
                </div>
                <AbilityVideoContainer>
                  <AbilityVideo
                    key={agent.abilities[activeAbility - 1].video}
                    preload="true"
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src={agent.abilities[activeAbility - 1].video}
                      type="video/mp4"
                    />
                  </AbilityVideo>
                  <LoadingLoop />
                </AbilityVideoContainer>
              </AbilitieDescription>
            </AbilitiesTab>
          </AbilitiesCont>
        ))}
    </>
  )
}
export default AgentAbilities
