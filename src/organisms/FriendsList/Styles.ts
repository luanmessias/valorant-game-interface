import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(47, 54, 60, 0.9);
  position: relative;
  margin-left: auto;
  margin-right: 0px;
  width: 250px;
  height: 100%;
`

export const ProfilesContent = styled.div``

export const OptionsContent = styled.div``

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
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 15px;
    color: #fff;
    font-weight: 500;
    background-color: rgba(165, 165, 165, 0.3);
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
  width: 55px;
  height: 55px;
  background-color: rgba(47, 54, 60, 0.9);
  position: absolute;
  left: -55px;
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
