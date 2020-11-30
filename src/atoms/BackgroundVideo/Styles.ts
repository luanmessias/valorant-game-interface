import styled from 'styled-components'

export const BgPattern = styled.div`
  background-image: url('/svg/bg-reticule.svg');
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background: rgb(115, 14, 14);
  background: linear-gradient(
    90deg,
    rgba(115, 14, 14, 1) 0%,
    rgba(121, 129, 118, 1) 13%,
    rgba(59, 131, 116, 1) 50%,
    rgba(117, 58, 53, 1) 90%,
    rgba(115, 14, 14, 1) 100%
  );
  transition: opacity 0.5s;

  &[data-active='false'] {
    opacity: 0.3;
  }
`

export const BgVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.1;
  transition: all 0.5s;

  &[data-active='false'] {
    display: none;
  }
`

export const PlayPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  box-sizing: border-box;
  top: 60px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  z-index: 1;
  padding: 5px 10px;
  border: 2px solid #fff;
  border-radius: 50px;
`
export const VideoSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 65px;
  height: 25px;
  background-color: rgba(59, 131, 116, 1);
  margin-left: auto;
  border-radius: 50px;
  padding: 2px 5px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: inset 0px 0px 10px -1px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: inset 0px 0px 10px -1px rgba(0, 0, 0, 0.61);
    box-shadow: inset 0px 0px 10px -1px rgba(0, 0, 0, 0.61);
  }

  &[data-active='false'] {
    background-color: rgba(221, 85, 92, 1);
  }
`
export const VideoSwictDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  transition: all 0.3s;

  &[data-active='false'] {
    left: 50px;
  }
`

export const VideoSwitchDesc = styled.div`
  font-weight: 900;
  color: #fff;
  margin: 0px 5px;
  position: absolute;
  right: 5px;
  transition: all 0.3s;

  &[data-active='false'] {
    right: 35px;
  }
`
