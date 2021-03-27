import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BannerNews from '@/molecules/BannerNews'
import GameModes from '@/molecules/GameModes'
import UpdateNotes from '@/molecules/UpdateNotes'
import { Container } from './Styles'

const AsideLeftHome: React.FC = () => {
  const [isHome, setIsHome] = useState(true)

  const router = useRouter()

  const handleRouteChange = url => {
    if (url !== '/') {
      setIsHome(!isHome)
    } else {
      setIsHome(isHome)
    }
  }

  useEffect(() => {
    handleRouteChange(router.pathname)
    return router.events.on('routeChangeComplete', handleRouteChange)
  }, [])

  return (
    <Container data-ishome={isHome}>
      <BannerNews />

      <UpdateNotes />
      <GameModes />
    </Container>
  )
}

export default AsideLeftHome
