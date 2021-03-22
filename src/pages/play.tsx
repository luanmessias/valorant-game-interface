import React, { useState } from 'react'
import Image from 'next/image'
import ReturnButton from '@/atoms/ReturnButton'
import PlayMenu from '@/molecules/PlayMenu'
import CloseGroupButton from '@/atoms/CloseGroupButton'
import AddPlayer from '@/molecules/AddPlayer'
import SwrFetchHook from '@/hooks/SwrFetchHook'
import Loading from '@/atoms/Loading'
import { useModalContext } from '@/context/Modal'
import AimSVG from '@/svg/aim.svg'
import CrosshairSVG from '@/svg/crosshair.svg'
import CloseSVG from '@/svg/close.svg'
import ValorantLogoSVG from '@/svg/valorant-logo.svg'
import PlusButtonSVG from '@/svg/plus-button.svg'
import DefaultButton from '@/atoms/DefaultButton'
import {
  Container,
  ReturnBtContainer,
  Content,
  ModalPlayers,
  PlayersContainer,
  PlayersFilter,
  PlayersList,
  CloseModal,
  AddFriendButton,
  RemovePlayer,
  PlayButtonsContainer
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
  const [searchString, setSearchString] = useState('')
  const [playerTwo, setPlayerTwo] = useState(undefined)
  const [playerThree, setPlayerThree] = useState(undefined)
  const [playerFour, setPlayerFour] = useState(undefined)
  const [playerFive, setPlayerFive] = useState(undefined)
  const [startButton, setStartButton] = useState(false)
  const [allPlayers, setAllpayers] = useState([])

  const { openModal, closeModal }: any = useModalContext()

  const profile = SwrFetchHook<IProfile[]>('/api/friends').data

  if (!profile) {
    return <Loading />
  }

  const loggedProfile = profile.filter(p => p.status === 'me')[0].name

  const onlinePlayers = profile.filter(
    p =>
      p.status === 'Online' &&
      p.name !== playerTwo &&
      p.name !== playerThree &&
      p.name !== playerFour &&
      p.name !== playerFive &&
      p.name.toLowerCase().includes(searchString.toLowerCase())
  )

  async function handleRemovePLayer(setPlayer, player) {
    await setPlayer(undefined)

    const index = allPlayers.indexOf(player)

    if (index > -1) {
      allPlayers.splice(index, 1)
      setStartButton(false)
    }
  }

  async function handleSetPlayer(setPlayer, player) {
    closeModal()
    await setPlayer(player)
    allPlayers.push(player)

    if (allPlayers.length === 4) {
      setStartButton(true)
    }
  }

  const togglePlayerForm = setPlayer => {
    openModal(
      <ModalPlayers>
        <PlayersContainer>
          <CloseModal onClick={closeModal}>
            <AimSVG />
          </CloseModal>
          <PlayersFilter hidden>
            <span>Filter: {searchString}</span>
            <input
              type="text"
              placeholder="filter"
              onChange={e => setSearchString(e.target.value)}
            />
          </PlayersFilter>

          <PlayersList>
            <ul>
              {onlinePlayers &&
                onlinePlayers.map(player => {
                  return (
                    <li key={player.name}>
                      <Image
                        src={`/img/profile-avatars/${player.avatar}.png`}
                        width={45}
                        height={45}
                      />
                      <div>
                        <span>{player.name}</span>
                      </div>
                      <AddFriendButton
                        onClick={() => handleSetPlayer(setPlayer, player.name)}
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
          <RemovePlayer
            onClick={() => handleRemovePLayer(setPlayerFour, playerFour)}
          >
            <CloseSVG />
          </RemovePlayer>
        </AddPlayer>
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerTwo)}
          playerName={playerTwo}
          dataSize={2}
        >
          <RemovePlayer
            onClick={() => handleRemovePLayer(setPlayerTwo, playerTwo)}
          >
            <CloseSVG />
          </RemovePlayer>
        </AddPlayer>
        <AddPlayer playerName={loggedProfile} dataSize={1} />
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerThree)}
          playerName={playerThree}
          dataSize={2}
        >
          <RemovePlayer
            onClick={() => handleRemovePLayer(setPlayerThree, playerThree)}
          >
            <CloseSVG />
          </RemovePlayer>
        </AddPlayer>
        <AddPlayer
          onClick={() => togglePlayerForm(setPlayerFive)}
          playerName={playerFive}
          dataSize={3}
        >
          <RemovePlayer
            onClick={() => handleRemovePLayer(setPlayerFive, playerFive)}
          >
            <CloseSVG />
          </RemovePlayer>
        </AddPlayer>
      </Content>

      <PlayButtonsContainer data-active={startButton}>
        <DefaultButton className="PlayMainBt" href="">
          TRAIN <CrosshairSVG />
        </DefaultButton>
        <DefaultButton className="PlayStartBt" href="">
          {!startButton && <span>SELECT PLAYERS</span>}
          {startButton && <span>START</span>}
          <ValorantLogoSVG />
        </DefaultButton>
        <DefaultButton className="PlayMainBt" href="">
          LEFT GROUP
        </DefaultButton>
      </PlayButtonsContainer>
    </Container>
  )
}

export default Play
