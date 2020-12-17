import styled from 'styled-components'

interface ICardImage {
  CardImage: string
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const PlayerStage = styled.div`
  display: flex;
  margin: 10px;
  box-sizing: border-box;
  position: relative;
  &[data-size='1'] {
    width: 240px;
    height: 560px;
  }
  &[data-size='2'] {
    width: 220px;
    height: 510px;
  }
  &[data-size='3'] {
    width: 200px;
    height: 470px;
  }
`

export const MainPlayer = styled.div<ICardImage>`
  width: 100%;
  height: 100%;
  background: url(${props => String(props.CardImage)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
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

export const PlayerStatus = styled.div`
  position: absolute;
  bottom: 36%;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  text-align: center;
`

export const PlayerName = styled.div`
  position: absolute;
  bottom: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  width: 100%;
  background-color: #eaeeb2;
  color: #2f363c;
  font-size: 18px;
  svg {
    margin-right: 10px;
  }
`

export const PlayerRanking = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    width: 70px;
    height: 70px;
    transform: rotate(45deg);
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(200, 200, 200, 0.4);
  }
`

export const PlayerContent = styled.div``

export const FormPlayer = styled.div``

export const PlusButton = styled.div``
