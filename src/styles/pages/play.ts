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

export const PlayersList = styled.div`
  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    max-height: 510px;
    overflow-y: auto;
    margin: 30px 0px;
    padding-right: 20px;

    /* width */
    ::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #000;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dd555c;
    }
  }
  li {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    background-color: rgba(200, 200, 200, 0.1);
    padding: 15px;
    margin: 10px 0px;
  }
  span {
    font-size: 20px;
    color: #fff;
    margin-left: 20px;
  }
`

export const AddFriendButton = styled.div`
  cursor: pointer;
  margin-left: auto;
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

export const RemovePlayer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(221, 85, 92, 1);
  color: #fff;
  position: absolute;
  top: -10px;
  right: -10px;
  transition: all 0.3s;

  &:before {
    content: 'REMOVE';
    padding: 5px;
    background-color: rgba(221, 85, 92, 1);
    border-radius: 3px;
    position: absolute;
    left: -120px;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    transform: scale(1.2);
    &:before {
      left: -65px;
      opacity: 1;
    }
  }
`
export const PlayButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #767a7e;
    position: absolute;
  }

  .PlayMainBt {
    width: 240px;
    height: 40px;
    svg {
      fill: #d7d9e8;
      margin-left: 10px;
    }
  }

  .PlayStartBt {
    font-size: 23px;
    color: #fff;
    width: 290px;
    height: 70px;
    margin: 0px 40px;
    background-color: #38776d;

    > div {
      background-color: #80c4b9;
    }

    &:hover {
      background-color: #80c4b9;
      > div {
        background-color: #38776d;
      }
      svg {
        fill: #80c4b9;
      }
    }

    span {
      position: absolute;
      z-index: 1;
    }

    svg {
      fill: #38776d;
      position: absolute;
      width: 60px;
      height: 60px;
      opacity: 0.2;
    }
  }

  &[data-active='false'] {
    .PlayStartBt {
      cursor: not-allowed;
      margin: 20px 10px;
      background-color: rgba(221, 85, 92, 0.9);
      & > div:last-of-type {
        background-color: rgba(180, 45, 72, 1);
        border-color: rgba(225, 105, 102, 0.9);
      }
    }
  }
`
