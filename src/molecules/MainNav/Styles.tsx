import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  height: 55px;
  width: 100%;

  > ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > li {
      list-style: none;

      &.play {
        padding: 0px 100px;
      }
    }
  }
`;

export const SvgPlay = styled.div`
  position: absolute;
  width: 354px;
  height: 55px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -2px);
`;
