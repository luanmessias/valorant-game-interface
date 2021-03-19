import styled from 'styled-components'

type AgentListItemPropTypes = {
  AgentListItem: string
}

export const AgentListContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  height: 150px;
  width: 100%;
  > svg {
    position: absolute;
    top: -8px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
`
export const AgentList = styled.ul`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #d1b15e;
  width: auto;
  padding-top: 10px;
`
export const AgentListItem = styled.li`
  list-style: none;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border: 2px solid #81ccba;
  margin: 5px 10px;
  cursor: pointer;
  transition: all 0.3s;

  > svg {
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    top: -25px;
    transition: all 0.3s;
  }

  > div {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid #262b33;
    background-color: rgba(95, 95, 95, 0.7);

    .dot {
      width: 4px;
      height: 4px;
      background-color: rgba(129, 204, 186, 1);
      position: absolute;
      transition: all 0.3s;
      &--TL {
        top: 0px;
        left: 0px;
      }
      &--TR {
        top: 0px;
        right: 0px;
      }
      &--BL {
        bottom: 0px;
        left: 0px;
      }
      &--BR {
        bottom: 0px;
        right: 0px;
      }
    }
  }

  &:hover {
    border-color: #d1b15e;

    .dot {
      background-color: #d1b15e;
      &--TL {
        width: 100%;
      }
      &--TR {
        height: 100%;
      }
      &--BL {
        height: 100%;
      }
      &--BR {
        width: 100%;
      }
    }
  }

  &[data-active='true'] {
    transform: scale(1.15);
    border-color: #d1b15e;
    background-color: rgba(129, 204, 186, 1);

    .dot {
      background-color: #d1b15e;
      &--TL {
        width: 100%;
      }
      &--TR {
        height: 100%;
      }
      &--BL {
        height: 100%;
      }
      &--BR {
        width: 100%;
      }
    }
  }
`

export const AgentItemStage = styled.div<AgentListItemPropTypes>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transition: all 0.3s;

  > div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: url('/img/agents_profile/${props => props.AgentListItem}.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.5s;
  }
`
