import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px 30px;

  > span {
    color: #fff;
  }
`

export const Switch = styled.div`
  width: 51px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: 25px;

  svg {
    transition: all 0.3s;
  }

  svg:first-of-type {
    margin-right: auto;
    position: absolute;
    z-index: 1;
    left: -5px;
  }

  svg + svg {
    position: absolute;
  }

  &[data-active='true'] {
    svg:first-of-type {
      left: 25px;
      rect {
        fill: rgba(79, 164, 146, 1);
      }
    }

    svg + svg {
      path {
        fill: rgba(79, 164, 146, 1);
      }
    }
  }
`
