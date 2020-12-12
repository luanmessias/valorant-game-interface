import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const PlayerStage = styled.div`
  display: flex;
  margin: 10px;
  box-sizing: border-box;
  &[data-size='1'] {
    width: 290px;
    height: 660px;
  }
  &[data-size='2'] {
    width: 260px;
    height: 590px;
  }
  &[data-size='3'] {
    width: 250px;
    height: 566px;
  }
`

export const MainPlayer = styled.div`
  width: 100%;
  height: 100%;
`

export const EmptyPlayer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #85848d;
  width: 100%;
  height: 100%;
  font-size: 50px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.3);
  }
`
