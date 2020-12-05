import styled from 'styled-components'

interface IagentName {
  agentName: string
  artType: string
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
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100vw - 150px);
  height: calc(100vh - 150px);
  position: absolute;
  bottom: 0;
  left: 30px;

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

export const ArtContent = styled.div<IagentName>`
  flex: 1;
  max-width: 600px;
  background-image: url('/img/agents/${props => props.agentName}.png');
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
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

export const AbilitiesCont = styled.div`
  width: 450px;
`

export const CharacterList = styled.ul`
  position: absolute;
  left: 0;
  bottom: 0;

  li {
    padding: 10px;
    a {
      font-size: 18px;
      color: #fff;
    }
  }
`
