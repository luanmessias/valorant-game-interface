import React from 'react'
import FrontLogo from '@/molecules/FrontLogo'
import AsideLeftHome from '@/organisms/AsideLeftHome'
import { Container } from '@/pageStyles/home'

import BgVideo from '@/molecules/BackgroundVideo'

const Home = () => {
  return (
    <>
      <Container>
        <AsideLeftHome />
        <FrontLogo />
      </Container>
      <BgVideo />
    </>
  )
}
export default Home
