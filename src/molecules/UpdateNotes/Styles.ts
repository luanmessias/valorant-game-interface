import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 319px;
  height: 65px;
  box-sizing: border-box;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 20px 0px;

  .dot {
    width: 2px;
    height: 2px;
    background-color: #fff;
    position: absolute;

    &.topLeft {
      top: 0;
      left: 0;
    }
    &.TopRight {
      top: 0;
      right: 0;
    }
    &.BottomLeft {
      bottom: 0;
      left: 0;
    }
    &.BottomRight {
      bottom: 0;
      right: 0;
    }
  }
`

export const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;

  > div {
    font-size: 23px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 16px);
  }

  > span {
    font-size: 13px;
    font-weight: 500;
    color: #676767;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 16px;
  }
`
