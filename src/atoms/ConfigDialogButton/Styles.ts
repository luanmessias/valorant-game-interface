import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2px;
  box-sizing: border-box;
  font-size: 18;
  font-weight: 500;
  color: #d7d9e8;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3.5px;
  width: 100%;
  height: 60px;
  background-color: rgba(90, 93, 97, 1);
  transition: all 0.5s;

  .dot {
    width: 2px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    transition: all 0.5s;

    &--tl {
      top: 0;
      left: 0;
    }
    &--tr {
      top: 0;
      right: 0;
    }
    &--bl {
      bottom: 0;
      left: 0;
    }
    &--br {
      bottom: 0;
      right: 0;
    }
  }

  &:hover {
    .dot {
      &--tl {
        top: 0;
        left: calc(100% - 2px);
      }
      &--tr {
        top: calc(100% - 2px);
        right: 0;
      }
      &--bl {
        bottom: calc(100% - 2px);
        left: 0;
      }
      &--br {
        bottom: 0;
        right: calc(100% - 2px);
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(127, 129, 133, 1);
  background-color: rgba(85, 88, 93, 1);
  transition: all 0.5s;

  &:hover {
    background-color: rgba(55, 58, 63, 1);
  }
`
