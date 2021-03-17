import React from 'react'
import Image from 'next/image'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import { Container, ProfileInfo, ProfileStatus, ProfileName } from './Styles'
import SendMsgSVG from '@/svg/send-message.svg'

interface IProfName {
  profName: string
}

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
}

const profileCard: React.FC<IProfName> = ({ profName }) => {
  const { data } = SwrFetchHook<IProfile[]>('/api/friends')

  if (!data) {
    return <p>carregando...</p>
  }

  const profile = data.find(p => p.name === profName)

  const setStatusColor = () => {
    const status = profile.status

    switch (status) {
      case 'me':
        return '#65ACA2'
        break
      case 'Online':
        return '#54A3DA'
        break
      default:
        return '#C2C2C2'
        break
    }
  }

  return (
    <Container>
      <ProfileStatus ProfStatus={setStatusColor()}>
        <Image
          src={`/img/profile-avatars/${profile.avatar}.png`}
          width="45"
          height="45"
        />
      </ProfileStatus>
      <ProfileInfo ProfStatus={setStatusColor()}>
        <ProfileName ProfileType={profile.status}> {profile.name}</ProfileName>
        <div>
          <span>{profile.activity}</span>
          {profile.status !== 'me' ? <SendMsgSVG /> : ''}
        </div>
      </ProfileInfo>
    </Container>
  )
}

export default profileCard
