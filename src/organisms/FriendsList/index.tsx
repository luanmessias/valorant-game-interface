import React, { useState } from 'react'
import {
  Container,
  ProfilesContent,
  OptionsContent,
  AccordionProfiles,
  ProfileMenu,
  ToggleMenu,
  Arrow
} from './Styles'
import ProfileCard from '@/molecules/ProfileCard'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import FriendsNetworkSVG from '@/svg/friends-network.svg'

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
}

const FriendsList: React.FC = () => {
  const [onlinePanel, setOnlinePanel] = useState(false)
  const [offlinePanel, setOfflinePanel] = useState(false)

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

  const toggleSwitchOnline = () => setOnlinePanel(!onlinePanel)
  const toggleSwitchOffline = () => setOfflinePanel(!offlinePanel)

  return (
    <Container>
      <ToggleMenu>
        <FriendsNetworkSVG />
      </ToggleMenu>
      <ProfilesContent>
        <ProfileCard profName={mainProfile.name} />
        <AccordionProfiles>
          <li>
            <ProfileMenu data-active={onlinePanel} onClick={toggleSwitchOnline}>
              <div className="numbers">{onlineFriends.length}</div>
              <strong>ONLINE</strong>
              <Arrow data-active={onlinePanel} />
            </ProfileMenu>
            <ul>
              {onlineFriends.map(online => (
                <li key={online.name}>
                  <ProfileCard profName={online.name} />
                </li>
              ))}
            </ul>
          </li>

          <li>
            <ProfileMenu
              data-active={offlinePanel}
              onClick={toggleSwitchOffline}
            >
              <div className="numbers">{offlineFriends.length}</div>
              <strong>OFFLINE</strong>
              <Arrow data-active={offlinePanel} />
            </ProfileMenu>
            <ul>
              {offlineFriends.map(offline => (
                <li key={offline.name}>
                  <ProfileCard profName={offline.name} />
                </li>
              ))}
            </ul>
          </li>
        </AccordionProfiles>
      </ProfilesContent>
      <OptionsContent></OptionsContent>
    </Container>
  )
}

export default FriendsList
