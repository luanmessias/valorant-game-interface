import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: relative;
`

export const ReturnBtContainer = styled.div`
  position: absolute;
  left: 35px;
  top: 35px;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 1380px;
`

export const ModalPlayers = styled.div``
export const PlayersContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 510px;
  padding: 20px 50px;
  background-color: rgba(25, 25, 25, 0.9);
`
export const PlayersFilter = styled.div``

export const PlayersList = styled.div``

export const AddFriendButton = styled.div`
  cursor: pointer;
`

export const CloseModal = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(25, 25, 25, 0.9);
  border: 2px solid transparent;
  width: 50px;
  height: 50px;
  transition: all 0.5s;

  svg {
    transition: all 0.5s;
  }

  &:hover {
    border-color: #dd555c;
    background-color: rgba(25, 25, 25, 0.5);
    svg {
      transform: scale(-0.5);
    }
  }
`
