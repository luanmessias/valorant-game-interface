import React from 'react'
import { Container } from './Styles'
import ProfileCard from '@/molecules/ProfileCard'
import SwrFetchHook from '@/hooks/SwrFetchHook'

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
}

const FriendsList: React.FC = () => {
  const { data } = SwrFetchHook<IProfile[]>('friends')

  if (!data) {
    return <p>carregando...</p>
  }

  const mainProfile = data.find(p => p.status === 'me')

  const onlineFriends = data.filter(friends => {
    return friends.status === 'Online'
  })

  const offlineFriends = data.filter(friends => {
    return friends.status === 'Offline'
  })

  return (
    <Container>
      <ProfileCard profName={mainProfile.name} />
      <div>asdasdasd</div>
      <ul>
        {onlineFriends.map(online => (
          <li key={online.name}>
            <ProfileCard profName={online.name} />
          </li>
        ))}
      </ul>
      <div>asdasdasd</div>
      <ul>
        {offlineFriends.map(offline => (
          <li key={offline.name}>
            <ProfileCard profName={offline.name} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default FriendsList
