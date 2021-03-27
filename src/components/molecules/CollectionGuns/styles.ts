import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  height: 100%;
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
export const ColGuns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  width: auto;
  height: 100%;
`
export const GunsGroup = styled.div``

export const GunContainer = styled.div`
  height: 120px;
  width: 300px;
  background-color: rgb(255, 255, 255, 0.1);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255, 0.2);
  }

  & + div {
    margin-top: 30px;
  }

  &[data-category='sidearm'] {
    width: 200px;
    > div {
      img {
        height: 55%;
        width: auto;
      }
    }
  }

  &[data-category='smg'],
  &[data-category='shotgun'] {
    width: 400px;
  }

  &[data-category='sniper'],
  &[data-category='machinegun'],
  &[data-category='melee'] {
    width: 455px;
  }

  &[data-category='rifle'] {
    width: 340px;
  }

  > div {
    width: 100%;
    height: calc(100% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 70%;
      width: auto;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.1);
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    height: 20px;
  }
`

export const ModalGunName = styled.div`
  color: #fff;
  font-size: 40px;
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  &:first-letter {
    text-transform: uppercase;
  }
  padding: 10px;
`
export const ModalGun = styled.div`
  position: relative;
  padding: 80px;
  img {
    max-width: 900px;
    max-height: 400px;
  }
`

export const CloseModal = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(25, 25, 25, 0.9);
  border: 2px solid transparent;
  width: 50px;
  height: 50px;
  transition: all 0.5s;

  svg {
    transition: all 0.5s;
  }

  &:hover {
    border-color: #dd555c;
    background-color: rgba(25, 25, 25, 0.5);
    svg {
      transform: scale(-0.5);
    }
  }
`
