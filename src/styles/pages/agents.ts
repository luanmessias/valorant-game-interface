import styled from 'styled-components'

type ActiveAgentPropTypes = {
  ActiveAgent: string
}

type AgentListItemPropTypes = {
  AgentListItem: string
}

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: relative;
`

export const ReturnBtContainer = styled.div`
  position: absolute;
  left: 35px;
  top: 35px;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: calc(100vw - 350px);
  height: calc(100vh - 150px);
  position: absolute;
  bottom: 0;
  left: 30px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);

  > div {
    display: flex;
    height: 100%;
  }
`

export const NameCont = styled.div`
  width: 500px;
`

export const PhotoCont = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  position: relative;
`

export const ArtContent = styled.div<ActiveAgentPropTypes>`
  flex: 1;
  max-width: 600px;
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;

  &[data-3dart='true'] {
    background-image: url('/img/agents/${props => props.ActiveAgent}_3d.png');
  }

  &[data-3dart='false'] {
    background-image: url('/img/agents/${props => props.ActiveAgent}.png');
  }
`

export const ArtToggle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding: 3px;
  border-radius: 50px;

  > div {
    color: #fff;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    background-color: #65aca2;
    border: 1px solid transparent;
    transition: all 0.3s;
  }

  &[data-active='false'] {
    .Art3D {
      background-color: transparent;
      border-color: #65aca2;
      opacity: 0.5;
      color: #65aca2;
    }
  }

  &[data-active='true'] {
    .Art2D {
      background-color: transparent;
      border-color: #65aca2;
      opacity: 0.5;
      color: #65aca2;
    }
  }
`

export const Art2D = styled.div`
  border-top-left-radius: 50px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0px;
`

export const Art3D = styled.div`
  border-top-left-radius: 0px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 50px;
`

export const AgentListContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  height: 200px;
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
    transform: scale(1.25);
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
    transform: scale(1.25);
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

export const AgentInfo = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 96px;
    font-weight: 900;
    text-transform: uppercase;
    color: #cfbb75;
    margin-bottom: 45px;
  }
  span {
    color: #828282;
    font-size: 18px;
  }
`
export const AgentRole = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 20px;
  span {
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
    margin-left: 20px;
  }
`
export const RoleDescription = styled.div`
  > div {
    max-height: 250px;
    overflow-y: auto;
    padding: 10px;

    span {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }

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
`

export const AbilitiesCont = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  h1 {
    display: block;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
  }
`

export const AbilitiesTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #fff;
`
export const Abilitie = styled.div``
export const AbilitieDescription = styled.div`
  width: 100%;
`
