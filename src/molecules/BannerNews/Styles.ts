import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('/img/banner-news.jpg');
  background-color: #000;
  width: 319px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  div {
    padding: 20px;
  }
  strong {
    font-size: 27px;
    color: ${props => props.theme.colors.text};
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  span {
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.colors.text};
  }
`
