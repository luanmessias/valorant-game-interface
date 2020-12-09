import styled from 'styled-components'

type ActiveAgentPropTypes = {
  ActiveAgent: string
}

export const PhotoCont = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  position: relative;
  height: 100%;
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
  padding: 3px;
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: 50px;

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
