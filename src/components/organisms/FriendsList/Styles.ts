import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(47, 54, 60, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  margin-left: auto;
  margin-right: 0px;
  width: 250px;
  height: calc(100% - 49px);
  right: 0;
  bottom: 0;
  transition: all 0.5s;

  &[data-active='false'] {
    right: -195px;
  }
`

export const ProfilesContent = styled.div``

export const ProfileColapseMenu = styled.div``

export const AccordionProfiles = styled.ul`
  list-style: none;

  > li {
    > ul {
      list-style: none;
      max-height: 355px;
      overflow-y: auto;
      overflow-x: hidden;
      transition: all 0.3s;

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
  }
`

export const ProfileMenu = styled.div`
  background-color: rgba(47, 54, 60, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  cursor: pointer;

  .numbers {
    width: 38px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
  }

  > strong {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
  }

  &[data-active='true'] + ul {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
`

export const ToggleMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(195, 198, 233, 0.5);
  position: absolute;
  right: 0px;
  top: 0;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    position: absolute;
    transition: all 0.5s;
    left: 2px;
  }

  &[data-active='true'] {
    width: 10%;
    left: -10%;

    svg {
      transform: rotate(180deg);
    }
  }

  &[data-ishome='true'] {
    display: none;
  }
`

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 30px;
  height: 30px;
  &:after,
  &:before {
    display: block;
    content: '';
    width: 12px;
    height: 2px;
    background-color: #fff;
    transition: all 0.5s;
  }

  &:after {
    transform: rotate(56deg) translateX(-2px) translateY(2px);
  }

  &:before {
    transform: rotate(-56deg) translateX(2px) translateY(2px);
  }

  &[data-active='true'] {
    &:after {
      transform: rotate(-56deg) translateX(-3px) translateY(-1px);
    }

    &:before {
      transform: rotate(56deg) translateX(3px) translateY(-1px);
    }
  }
`

export const OptionsContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #24292e;
  width: 100%;
  height: 45px;
  transition: all 0.5s;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    transition: all 0.2s;

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }

    &[data-active='true'] {
      background: #000;

      svg {
        transform: scale(1.2);
      }
    }
  }

  svg {
    cursor: pointer;
    transition: all 0.2s;
  }

  .svgAddFriend {
  }

  .svgSearch {
  }
`

export const AddFriend = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000;
  margin-top: auto;
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  position: absolute;
  bottom: -45px;

  transition: all 0.5s;
  z-index: 2;

  &[data-active='true'] {
    opacity: 1;
    bottom: 45px;
  }

  div {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #000;
    left: -30px;
    top: 0;
    position: absolute;

    svg {
      width: 20px;
      height: 20px;
      fill: #dd555c;
    }
  }

  span {
    font-size: 15px;
    color: #555656;
  }

  input {
    border: 0px;
    border-bottom: 1px solid #fff;
    padding: 0px;
    background-color: transparent;
    width: 80px;
    height: 35px;
    color: #fff;
    &:focus {
      outline: none;
    }
  }

  svg {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const SearchFriend = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000;
  margin-top: auto;
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  position: absolute;
  bottom: -45px;
  transition: all 0.5s;
  z-index: 2;

  &[data-active='true'] {
    opacity: 1;
    bottom: 45px;
  }

  div {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #000;
    left: -30px;
    top: 0;
    position: absolute;

    svg {
      width: 20px;
      height: 20px;
      fill: #dd555c;
    }
  }

  input {
    border: 0px;
    border-bottom: 1px solid #fff;
    padding: 0px;
    background-color: transparent;
    width: 90%;
    height: 35px;
    color: #fff;
    &:focus {
      outline: none;
    }
  }

  svg {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`
