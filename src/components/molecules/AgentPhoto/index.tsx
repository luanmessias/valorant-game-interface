import React, { useState } from 'react'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { PhotoCont, ArtToggle, Art2D, Art3D, ArtContent } from './Styles'

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
  const [changeArt, setChangeArt] = useState(true)
  const agents = SwrFetchHook<IAgents[]>('/api/agents').data
  const roles = SwrFetchHook<IRoles[]>('/api/roles').data

  if (!agents) {
    return <p>carregando...</p>
  }

  if (!roles) {
    return <p>carregando...</p>
  }

  return (
    <PhotoCont>
      <ArtToggle data-active={changeArt}>
        <Art2D className="Art2D" onClick={() => setChangeArt(false)}>
          2D
        </Art2D>
        <Art3D className="Art3D" onClick={() => setChangeArt(true)}>
          3D
        </Art3D>
      </ArtToggle>
      <ArtContent ActiveAgent={RouteAgent} data-3dart={changeArt} />
    </PhotoCont>
  )
}
export default AgentDescription
