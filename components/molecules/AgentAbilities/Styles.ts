import styled from 'styled-components'

type ActiveAbilityPropTypes = {
  ActiveAbility: number
}

export const AbilitiesCont = styled.div`
  width: 450px;
  height: calc(100% - 230px);
  display: flex;
  flex-direction: column;

  h1 {
    display: block;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0px;
  }
`

export const AbilitiesTab = styled.div<ActiveAbilityPropTypes>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #fff;

  > div:nth-of-type(${props => props.ActiveAbility}) {
    opacity: 1;
    background-color: rgba(129, 204, 186, 0.5);
    img {
      filter: initial;
    }
  }
`
export const Ability = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0.4;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 120%;
    top: 0;
    opacity: 1;
    transition: transform 0.2s ease-out;
    background-color: rgba(129, 204, 186, 0.5);
    left: -10%;
    transform: translateX(-100%) skew(-10deg);
  }

  img {
    width: 48px;
    height: 48px;
    transition: all 0.3s;
    z-index: 1;
  }

  &:hover {
    opacity: 1;
    &:after {
      transform: translateX(0) skew(-10deg);
    }
    img {
      filter: initial;
    }
  }
`

export const AbilitieDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
  strong {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-size: 24px;
    text-transform: uppercase;
    color: #fff;
  }

  span {
    font-size: 16px;
    color: #fff;
    display: block;
    height: 140px;
  }
`

export const AbilityVideoContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 238.5px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  cursor: zoom-in;

  &:hover {
    transform: scale(1.8) translateX(-110px) translateY(-50px);
    z-index: 999;
  }
`

export const AbilityVideo = styled.video`
  width: 100%;
  height: auto;
  margin-top: auto;
  position: absolute;
  z-index: 1;
`

export const VideoLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > div {
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
      content: ' ';
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    fill: #dd555c;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }
`
