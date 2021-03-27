import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  &[data-preloader='true'] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 744px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  color: #f5f7d8;
`

export const Card = styled.div`
  position: relative;
  img {
    width: auto;
    height: 380px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f7d8;
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 150px;
  }
`

export const Spray = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.1);
  height: 100px;
  margin-top: 10px;

  img {
    height: calc(100% - 20px);
    width: auto;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20px;
    background-color: rgb(255, 255, 255, 0.1);
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
  }
`
