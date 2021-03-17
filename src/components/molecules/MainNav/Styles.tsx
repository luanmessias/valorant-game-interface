import styled from 'styled-components'
import { minDevice, maxDevice } from '@/globalStyles/global/device'

export const Container = styled.nav`
  display: flex;
  height: 52px;
  width: 100%;

  > ul {
    width: 100%;
    height: 48px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    border-bottom: 1px solid #c3c6e9;
    box-shadow: 1px 23px 27px 5px rgba(0, 0, 0, 0.34) inset;
    -webkit-box-shadow: 1px 23px 27px 5px rgba(0, 0, 0, 0.34) inset;
    -moz-box-shadow: 1px 23px 27px 5px rgba(0, 0, 0, 0.34) inset;

    > li {
      list-style: none;
      margin: 0px 20px;
      text-align: center;
      width: 120px;
      transition: all 0.2s;

      &.website {
        width: auto;
        position: absolute;
        left: 16px;
        margin: 0;
      }

      &.clock {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          margin-right: 10px;
        }
        span {
          font-size: 15px;
          font-weight: 400;
          color: #fff;
        }
      }

      &.points {
        div {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          & + div {
            margin-top: 3px;
          }
        }
        svg {
          margin-right: 10px;
        }
        span {
          font-size: 15px;
          font-weight: 400;
          color: #fff;
        }
      }

      &.agents {
        margin-right: 200px;
      }

      &.carrier {
        margin-left: 200px;
      }

      &.play {
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -2px);
        width: 354px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
        }

        a {
          position: relative;
          z-index: 1;
          font-size: 23px;
          font-weight: 700;
          color: #000;
        }

        &:hover {
          a {
            color: #fff;
          }
          svg {
            fill: #fff;
            opacity: 0.5;
          }
        }
      }

      &.settings {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 35px;
        height: 35px;
        position: absolute;
        right: 16px;
        margin: 0;
        cursor: pointer;
        transition: all 0.5s;
        border: 1px solid #fff;
        padding: 5px;
        border-radius: 50%;

        svg {
          transition: all 0.5s;
          width: 20px;
          height: 20px;
        }

        &:hover {
          padding: 0px;
          border: 0px;
          svg {
            transform: rotate(360deg);
            fill: #dd555c;
            width: 45px;
            height: 45px;
          }
        }
      }
    }
  }

  &.placeholderCont {
    > ul {
      > li {
        border: 0;
        padding: 0;
      }
    }
  }

  @media ${maxDevice.mobileL} {
    position: absolute;
    height: calc(100% - 50px);
    margin-top: 50px;
    > ul {
      box-sizing: border-box;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      width: auto;
      background-color: rgba(0, 0, 0, 0.5);
      border: 0;

      > li {
        &.website,
        &.clock,
        &.init,
        &.agents,
        &.play,
        &.carrier,
        &.collection,
        &.points,
        &.settings {
          box-sizing: border-box;
          padding: 20px;
          width: 100%;
          margin: 0px;
          text-align: left;
          border: 0px;
          position: inherit;
          height: auto;
          transform: inherit;
          justify-content: flex-start;
          > a {
            font-size: 20px;
          }
        }

        &.init {
          order: 1;
        }

        &.agents {
          order: 2;
        }

        &.agents {
          order: 3;
        }
        &.play {
          order: 4;
        }
        &.carrier {
          order: 5;
        }
        &.collection {
          order: 6;
        }
        &.clock {
          order: 7;
        }

        &.points {
          order: 8;
        }

        &.settings {
          order: 9;

          svg {
            width: 40px;
            height: 40px;
          }
        }

        &.website {
          display: none;
        }

        &.play {
          > a {
            font-size: 20px;
            font-weight: bold;
            color: #d7d9e8;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 3.5px;
            transition: all 0.3s;

            &:hover,
            &:active {
              color: #eaeeb2;
            }
          }
          > div {
            display: none;
          }
        }
      }
    }
  }
`

export const SvgPlay = styled.div`
  position: absolute;
  top: 0px;
  width: 354px;
  height: 55px;
`
export const MobNav = styled.div``
export const MobMenu = styled.div``
export const MobFriends = styled.div``
