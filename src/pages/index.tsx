import React from 'react'
import FrontLogo from '@/molecules/FrontLogo'
import AsideLeftHome from '@/organisms/AsideLeftHome'
import AsideRightHome from '@/organisms/AsideRightHome'
import { Container } from '@/pageStyles/home'

const Home: React.FC = () => {
  return (
    <Container>
      <AsideLeftHome />
      <FrontLogo />
      <AsideRightHome />
    </Container>
  )
}
export default Home
