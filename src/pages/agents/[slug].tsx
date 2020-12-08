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
  AbilitieDescription,
  Ability,
  AbilityVideo,
  AbilityVideoContainer,
  VideoLoading
} from '@/globalStyles/pages/agents'
import ReturnButton from '@/atoms/ReturnButton'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import AgentListArrowSVG from '@/svg/agents-select-arrow.svg'
import ValorantLogoSVG from '@/svg/valorant-logo.svg'

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
  const [activeAbility, setActiveAbility] = useState(1)

  if (!agents) {
    return <p>carregando...</p>
  }

  if (!roles) {
    return <p>carregando...</p>
  }

  const playVideo = (url: string) => {
    return (
      <video key={url}>
        <source src={url} />
      </video>
    )
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
                    <span>
                      {agent.abilities[activeAbility - 1].description}
                    </span>
                  </div>
                  <AbilityVideoContainer>
                    <AbilityVideo
                      key={agent.abilities[activeAbility - 1].video}
                      autoPlay
                      muted
                      loop
                    >
                      <source
                        src={agent.abilities[activeAbility - 1].video}
                        type="video/mp4"
                      />
                    </AbilityVideo>
                    <VideoLoading>
                      <div></div>
                      <ValorantLogoSVG />
                    </VideoLoading>
                  </AbilityVideoContainer>
                </AbilitieDescription>
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
