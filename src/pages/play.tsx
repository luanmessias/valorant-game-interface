import React, { useState } from 'react'
import ReturnButton from '@/atoms/ReturnButton'
import PlayMenu from '@/molecules/PlayMenu'
import CloseGroupButton from '@/atoms/CloseGroupButton'
import AddPlayer from '@/molecules/AddPlayer'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import Loading from '@/atoms/Loading'
import { useModalContext } from '@/context/Modal'
import AimSVF from '@/svg/aim.svg'
import PlusButtonSVG from '@/svg/plus-button.svg'
import {
  Container,
  ReturnBtContainer,
  Content,
  ModalPlayers,
  PlayersContainer,
  PlayersFilter,
  PlayersList,
  CloseModal,
  AddFriendButton
} from '@/globalStyles/pages/play'

interface IProfile {
  name: string
  activity: string
  status: string
  avatar: string
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}

const Play: React.FC<IProfile> = (): JSX.Element => {
  const { openModal, closeModal }: any = useModalContext()
  const [activeForm, setActiveForm] = useState(false)
  const [playerTwo, setPlayerTwo] = useState(undefined)
  const [playerThree, setPlayerThree] = useState(undefined)
  const [playerFour, setPlayerFour] = useState(undefined)
  const [playerFive, setPlayerFive] = useState(undefined)

  const profile = SwrFetchHook<IProfile[]>('friends').data

  if (!profile) {
    return <Loading />
  }

  const loggedProfile = profile.filter(p => p.status === 'me')[0].name
  const onlinePlayers = profile.filter(p => p.status === 'Online')

  const togglePlayerForm = setPlayer => {
    openModal(
      <ModalPlayers>
        <PlayersContainer>
          <CloseModal onClick={closeModal}>
            <AimSVF />
          </CloseModal>
          <PlayersFilter></PlayersFilter>
          <PlayersList>
            <ul>
              {onlinePlayers &&
                onlinePlayers.map(player => {
                  return (
                    <li key={player.name}>
                      <h2>{player.name}</h2>
                      <AddFriendButton
                        onClick={() => {
                          setPlayer(player.name)
                          closeModal()
                        }}
                      >
                        <PlusButtonSVG />
                      </AddFriendButton>
                    </li>
                  )
                })}
            </ul>
          </PlayersList>
        </PlayersContainer>
      </ModalPlayers>
    )
  }

  return (
    <Container>
      <ReturnBtContainer>
        <ReturnButton />
      </ReturnBtContainer>

      <PlayMenu />
      <CloseGroupButton />

      <Content>
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerFour)}
          playerName={playerFour}
          dataSize={3}
        >
          asasdasd
        </AddPlayer>
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerTwo)}
          playerName={playerTwo}
          dataSize={2}
        />
        <AddPlayer playerName={loggedProfile} dataSize={1} />
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerThree)}
          playerName={playerThree}
          dataSize={2}
        />
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerFive)}
          playerName={playerFive}
          dataSize={3}
        />
      </Content>
    </Container>
  )
}

export default Play
