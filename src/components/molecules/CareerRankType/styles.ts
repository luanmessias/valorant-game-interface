import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const RatingContent = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 95px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const RatingTitle = styled.div`
  border: 1px solid #4e566a;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 95px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #e6e6e6;

    strong {
      font-size: 45px;
      font-weight: 900;
      text-transform: uppercase;
      color: #464646;
    }
    span {
      color: #828282;
      font-size: 14px;
    }
  }

  .dot {
    width: 2px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    transition: all 0.5s;

    &--tl {
      top: 0;
      left: 0;
    }
    &--tr {
      top: 0;
      right: 0;
    }
    &--bl {
      bottom: 0;
      left: 0;
    }
    &--br {
      bottom: 0;
      right: 0;
    }
  }
`

export const RatingEpisode = styled.div`
  border: 1px solid #4e566a;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 95px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #e6e6e6;
    padding: 10px;

    strong {
      font-size: 30px;
      font-weight: 900;
      text-transform: uppercase;
      color: #464646;
    }
    span {
      color: #828282;
      font-size: 14px;
    }
  }

  .dot {
    width: 2px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    transition: all 0.5s;

    &--tl {
      top: 0;
      left: 0;
    }
    &--tr {
      top: 0;
      right: 0;
    }
    &--bl {
      bottom: 0;
      left: 0;
    }
    &--br {
      bottom: 0;
      right: 0;
    }
  }
`
