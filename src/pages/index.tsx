import React from 'react'
import FrontLogo from '@/molecules/FrontLogo'
import AsideLeftHome from '@/organisms/AsideLeftHome'
import FriendsList from '@/organisms/FriendsList'
import { Container } from '@/pageStyles/home'

const Home: React.FC = () => {
  return (
    <Container>
      <AsideLeftHome />
      <FrontLogo />
      <FriendsList />
    </Container>
  )
}
export default Home
