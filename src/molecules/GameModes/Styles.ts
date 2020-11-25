import styled from 'styled-components'

export const Container = styled.div`
  width: 319px;
`

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px;
`

export const DecorativeBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9e9e9e;
  display: flex;
  justify-content: space-between;

  &:before,
  &:after {
    content: '';
    width: 8px;
    height: 1px;
    background-color: #fff;
    display: block;
  }
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  font-weight: 700;
  height: 31px;
`

export const ModeBox = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  & + div {
    margin-top: 5px;
  }

  > div {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .symbol {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    width: 45px;
  }
  .name {
    background-color: rgba(255, 255, 255, 0.12);
    justify-content: flex-start;
    width: 180px;
    padding: 10px;
    font-size: 13px;
    color: #fff;
  }
  .time {
    background-color: rgba(255, 255, 255, 0.04);
    padding: 10px;
    font-size: 12px;
    color: #fff;
    width: calc(100% - (180 + 45));
  }
`
