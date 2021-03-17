import styled from 'styled-components'

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
  justify-content: center;
  align-items: flex-start;
  width: calc(100vw - 150px);
  height: calc(100vh - 150px);
  position: absolute;
  bottom: 0;
  left: 30px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);

  > div {
    display: flex;
  }
`
