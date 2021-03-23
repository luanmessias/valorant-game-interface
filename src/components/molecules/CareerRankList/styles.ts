import styled from 'styled-components'

const ColRankWidth = '20%'
const ColRatingWidth = '10%'
const ColProfileWidth = '50%'
const ColGamesWidth = '20%'

export const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid #5a657a;
  width: 100%;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.1);
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
  text-align: center;
  color: #b9cdf1;

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
    width: ${ColProfileWidth};
  }
  &:nth-of-type(5) {
    width: ${ColGamesWidth};
  }
`
