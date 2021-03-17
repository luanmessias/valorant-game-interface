import styled from 'styled-components'

export const Container = styled.div`
  .DialogButton {
    margin: 10px 0px;
  }

  .DialogButtonRed {
    margin: 10px 0px;
    background-color: rgba(221, 85, 92, 0.9);
    & > div:last-of-type {
      background-color: rgba(221, 85, 92, 0.9);
      border-color: rgba(225, 105, 102, 0.9);
      &:hover {
        background-color: rgba(180, 45, 72, 1);
      }
    }
  }
`

export const LineUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1px;
  background-color: #fff;
  overflow: visible;

  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 5px;
    background-color: #fff;
    position: absolute;
  }
`

export const LineDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1px;
  background-color: #fff;
  overflow: visible;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 3px;
    background-color: #fff;
  }
`

export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 510px;
  padding: 20px 50px;
  background-color: rgba(25, 25, 25, 0.9);
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

export const ArrowSVG = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;

  svg {
    opacity: 0.6;
  }
`
