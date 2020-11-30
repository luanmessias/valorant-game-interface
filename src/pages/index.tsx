import React from 'react'
import FrontLogo from '@/molecules/FrontLogo'
import AsideLeftHome from '@/organisms/AsideLeftHome'
import { Container } from '@/pageStyles/home'

const Home: React.FC = () => {
  return (
    <Container>
      <AsideLeftHome />
      <FrontLogo />
    </Container>
  )
}
export default Home
