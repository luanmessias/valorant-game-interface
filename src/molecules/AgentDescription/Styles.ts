import styled from 'styled-components'

type AgentListItemPropTypes = {
  AgentListItem: string
}

export const NameCont = styled.div`
  width: 500px;
`
export const AgentInfo = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 96px;
    font-weight: 900;
    text-transform: uppercase;
    color: #cfbb75;
    margin-bottom: 45px;
    margin-top: 0px;
  }
  span {
    color: #828282;
    font-size: 18px;
  }
`

export const AgentRole = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
  margin-bottom: 20px;
  span {
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
    margin-left: 20px;
  }
`

export const RoleDescription = styled.div`
  > div {
    max-height: 250px;
    overflow-y: auto;
    padding: 10px;

    span {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #000;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #dd555c;
    }
  }
`
