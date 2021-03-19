import styled, { keyframes } from 'styled-components'

const placeholderLoading = keyframes`
  0%{
      opacity: .2
  }
  50%{
      opacity: .5
  }
  100%{
      opacity: .2
  }
`

export const Container = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  animation: ${placeholderLoading} 2s linear infinite;
  background-color: #000;

  &[data-circle='true'] {
    border-radius: 50%;
  }
`
