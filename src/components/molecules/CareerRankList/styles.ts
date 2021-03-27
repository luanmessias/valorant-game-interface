import styled from 'styled-components'

const ColRankWidth = '10%'
const ColRatingWidth = '20%'
const ColProfileWidth = '50%'
const ColGamesWidth = '20%'

export const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid #5a657a;
  width: 100%;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  min-height: 636px;
`
export const LeaderboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
export const HeadList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`
export const TitleHead = styled.div`
  display: flex;
  color: #b9cdf1;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1) {
    width: ${ColRankWidth};
  }
  &:nth-of-type(2) {
    width: ${ColRatingWidth};
  }
  &:nth-of-type(3) {
    width: ${ColProfileWidth};
  }
  &:nth-of-type(4) {
    width: ${ColGamesWidth};
    justify-content: flex-end;
    padding-right: 15px;
  }
`
export const RankList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`
export const RankItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #5a657a;

  &[data-first='true'] {
    height: 120px;
    ~ div {
      height: 52.5px;
    }
  }

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
`
export const RankItemPosition = styled.div`
  width: ${ColRankWidth};
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 300;
  color: #fff;

  svg {
    display: none;
    * {
      fill: #ffff00;
    }
  }

  &[data-first='true'] {
    font-size: 45px;
    font-weight: 500;
    svg {
      display: flex;
    }
  }
`
export const RankItemRating = styled.div`
  width: ${ColRatingWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  span {
    font-size: 16px;
    color: #fff;
    margin-left: 40px;
  }
`
export const RankItemDetails = styled.div`
  width: ${ColProfileWidth};
  background-color: rgba(255, 255, 255, 0.05);

  .playerInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 45px;
    margin-left: 20px;

    strong {
      font-size: 18px;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #c2c2c2;
    }
  }
`
export const RankItemWon = styled.div`
  width: ${ColGamesWidth};
  background-color: rgba(255, 255, 255, 0.05);
  justify-content: flex-end;
  padding-right: 15px;

  div {
    font-size: 14px;
    color: #c2c2c2;
    span {
      opacity: 1;
      color: #fff;
    }
  }
`
export const PaginateContainer = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;

  .paginate {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style: none;

    li {
      margin: 0px 1px;

      > a {
        width: 22px;
        height: 22px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgba(255, 255, 255, 0.5);
        font-size: 14px;
      }

      &:hover:not(.pagDisabled) {
        background-color: rgba(255, 255, 255, 0.3);
      }

      &.pagDisabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      &.pagActive {
        background-color: rgba(255, 255, 255, 0.3);
      }

      a:active,
      a:focus {
        outline: 0;
        -moz-outline-style: none;
      }
    }
  }
`
