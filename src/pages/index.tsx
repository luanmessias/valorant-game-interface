import React from 'react'
import FrontLogo from '@/molecules/FrontLogo'
import AsideLeftHome from '@/organisms/AsideLeftHome'
import { Container } from '@/pageStyles/home'
import BgVideo from '@/atoms/BackgroundVideo'

const Home: React.FC = () => {
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
