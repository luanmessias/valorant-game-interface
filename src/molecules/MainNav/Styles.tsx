import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  height: 55px;
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
            fill: #000;
            opacity: 1;
          }
        }
      }

      &.settings {
        width: auto;
        position: absolute;
        right: 16px;
        margin: 0;
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
