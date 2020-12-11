import styled from 'styled-components'

interface IActiveOpt {
  ActiveOpt: number
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 0px;
`
export const Menu = styled.ul<IActiveOpt>`
  display: flex;
  width: auto;
  list-style: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);

  > li:nth-child(${props => props.ActiveOpt}) {
    background-color: rgba(255, 255, 255, 0.3);
    &:after {
      background-color: #eaeeb2;
    }
    &:before {
      background-color: #eaeeb2;
    }
  }
`

export const MenuItem = styled.li`
  padding: 10px;
  margin: 0px 10px;
  color: #fff;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  &:after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    transform: rotate(45deg) translateX(-50%);
    background-color: #fff;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transition: all 0.3s;
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: transparent;
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: all 0.3s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    &:after {
      background-color: #eaeeb2;
    }
    &:before {
      background-color: #eaeeb2;
    }
  }
`
