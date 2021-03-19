import React, { useState } from 'react'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { PhotoCont, ArtToggle, Art2D, Art3D, ArtContent } from './Styles'
import PlaceholderTag from '@/atoms/PlaceholderTag'

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

const AgentDescription: React.FC<IRouteAgent> = ({
  RouteAgent
}: IRouteAgent) => {
  const [changeArt, setChangeArt] = useState(true)
  const agents = SwrFetchHook<IAgents[]>('/api/agents').data

  if (!agents) {
    return (
      <PlaceholderTag
        width={600}
        height="100vh"
        color="transparent"
        showLoading={true}
      />
    )
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
