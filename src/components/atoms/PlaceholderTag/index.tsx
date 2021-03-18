import React from 'react'

import { Container } from './styles'

interface PlaceholderTagProps {
  circle?: boolean
  width?: number
  height?: number
  color?: string
}

const PlaceholderTag = ({
  circle,
  width,
  height,
  color
}: PlaceholderTagProps) => {
  return (
    <Container
      data-circle={circle}
      style={{ width, height, backgroundColor: color }}
    ></Container>
  )
}

export default PlaceholderTag
