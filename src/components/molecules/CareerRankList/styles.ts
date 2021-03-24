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
`

export const LeaderboardContainer = styled.div``

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
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
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
