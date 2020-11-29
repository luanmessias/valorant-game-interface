import React, { useState } from 'react'
import {
  Container,
  ProfilesContent,
  OptionsContent,
  AccordionProfiles,
  ProfileMenu,
  ToggleMenu,
  Arrow,
  AddFriend,
  SearchFriend
} from './Styles'
import ProfileCard from '@/molecules/ProfileCard'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import FriendsNetworkSVG from '@/svg/friends-network.svg'
import CloseSVG from '@/svg/close.svg'
import AddFriendSVG from '@/svg/add-friend.svg'
import SearchSVG from '@/svg/search.svg'
import PlusButtonSVG from '@/svg/plus-button.svg'

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
}

const FriendsList: React.FC = () => {
  const [onlinePanel, setOnlinePanel] = useState(false)
  const [offlinePanel, setOfflinePanel] = useState(false)
  const [friendList, setFriendList] = useState(false)
  const [addFriend, setAddFriend] = useState(false)
  const [searchFriend, setSearchFriend] = useState(false)

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

  const toggleFriendlist = () => {
    if (searchFriend) {
      setSearchFriend(!searchFriend)
    }

    if (addFriend) {
      setAddFriend(!addFriend)
    }

    return setFriendList(!friendList)
  }

  const toggleAddFriendBox = () => {
    if (searchFriend) {
      setSearchFriend(!searchFriend)
    }

    return setAddFriend(!addFriend)
  }

  const toggleSearchFriendBox = () => {
    if (addFriend) {
      setAddFriend(!addFriend)
    }

    return setSearchFriend(!searchFriend)
  }

  return (
    <Container data-active={friendList}>
      <ToggleMenu data-active={friendList} onClick={toggleFriendlist}>
        <FriendsNetworkSVG className="svgFriends" />
        <CloseSVG className="svgClose" />
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

      <AddFriend data-active={addFriend}>
        <div onClick={toggleAddFriendBox}>
          <CloseSVG className="svgClose" />
        </div>
        <input type="text" placeholder="RIOT ID" />
        <span>#</span>
        <input type="text" placeholder="TAG" />
        <PlusButtonSVG />
      </AddFriend>

      <SearchFriend data-active={searchFriend}>
        <div onClick={toggleSearchFriendBox}>
          <CloseSVG className="svgClose" />
        </div>
        <input type="text" placeholder="RIOT ID" />
      </SearchFriend>

      <OptionsContent>
        <div data-active={addFriend}>
          <AddFriendSVG onClick={toggleAddFriendBox} className="svgAddFriend" />
        </div>
        <div data-active={searchFriend}>
          <SearchSVG onClick={toggleSearchFriendBox} className="svgSearch" />
        </div>
      </OptionsContent>
    </Container>
  )
}

export default FriendsList
