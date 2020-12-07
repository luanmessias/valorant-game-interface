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
  AgentListContainer,
  AgentList,
  AgentListItem,
  AgentItemStage,
  AgentInfo,
  AgentRole,
  RoleDescription,
  AbilitiesTab,
  Abilitie,
  AbilitieDescription
} from '@/globalStyles/pages/agents'
import ReturnButton from '@/atoms/ReturnButton'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import AgentListArrowSVG from '@/svg/agents-select-arrow.svg'

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
  const routeAgent = String(router.query.slug)

  if (!agents) {
    return <p>carregando...</p>
  }

  if (!roles) {
    return <p>carregando...</p>
  }

  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>
      {(agents || [])
        .filter(a => a.name === routeAgent)
        .map(agent => (
          <Content key={agent.id}>
            <NameCont>
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
            <PhotoCont>
              <ArtToggle data-active={changeArt}>
                <Art2D className="Art2D" onClick={() => setChangeArt(false)}>
                  2D
                </Art2D>
                <Art3D className="Art3D" onClick={() => setChangeArt(true)}>
                  3D
                </Art3D>
              </ArtToggle>
              <ArtContent ActiveAgent={routeAgent} data-3dart={changeArt} />
            </PhotoCont>
            <AbilitiesCont>
              <h1>special abilities</h1>
              <AbilitiesTab>
                <Abilitie>
                  <Image
                    src={`/img/abilities/${agent.name}/1.png`}
                    width={41}
                    height={41}
                  />
                </Abilitie>
                <Abilitie>
                  <Image
                    src={`/img/abilities/${agent.name}/2.png`}
                    width={41}
                    height={41}
                  />
                </Abilitie>
                <Abilitie>
                  <Image
                    src={`/img/abilities/${agent.name}/3.png`}
                    width={41}
                    height={41}
                  />
                </Abilitie>
                <Abilitie>
                  <Image
                    src={`/img/abilities/${agent.name}/4.png`}
                    width={41}
                    height={41}
                  />
                </Abilitie>
                <AbilitieDescription>lorem ipsun</AbilitieDescription>
              </AbilitiesTab>
            </AbilitiesCont>
          </Content>
        ))}

      <AgentListContainer>
        <AgentList>
          {(agents || []).map(agent => {
            return (
              <Link key={agent.id} href={`/agents/${agent.name}`}>
                <AgentListItem data-active={routeAgent === agent.name && true}>
                  {routeAgent === agent.name && <AgentListArrowSVG />}
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
    </Container>
  )
}

export default Agents
