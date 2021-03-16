import styled from 'styled-components'

type ProfStatusPropTypes = {
  ProfStatus: string
}

type ProfileTypePropTypes = {
  ProfileType: string
}

export const Container = styled.div`
  width: 250px;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(158, 158, 158, 0.2);
  margin-bottom: 5px;
`

export const ProfileStatus = styled.div<ProfStatusPropTypes>`
  width: 45px;
  height: 45px;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.ProfStatus};
    position: absolute;
    right: -5px;
    bottom: 8px;
    box-shadow: 0px 0px 2px #000;
  }
`

export const ProfileInfo = styled.div<ProfStatusPropTypes>`
  padding-left: 10px;

  span {
    color: ${props => props.ProfStatus};
    font-weight: 400;
    font-size: 13px;
  }

  > div {
    display: flex;
  }

  svg {
    margin-left: 10px;
  }
`

export const ProfileName = styled.strong<ProfileTypePropTypes>`
  color: ${props => (props.ProfileType === 'me' ? '#eaeeb2' : '#FFF')};
  font-weight: 700;
  font-size: 16px;
`
