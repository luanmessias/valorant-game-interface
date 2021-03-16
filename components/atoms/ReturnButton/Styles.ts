import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  color: #fff;
  letter-spacing: 5px;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    margin-right: 10px;
    transition: all 0.3s;
    * {
      transition: all 0.3s;
    }
  }

  &:hover {
    color: #eaeeb2;
    letter-spacing: 0px;
    svg {
      margin-right: -10px;
      rect {
        opacity: 0;
      }
      path {
        stroke: #eaeeb2;
      }
    }
  }
`
