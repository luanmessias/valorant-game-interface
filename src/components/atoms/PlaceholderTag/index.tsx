import React from 'react'
import LoadingLoop from '@/atoms/LoadingLoop'

import { Container } from './styles'

interface PlaceholderTagProps {
  circle?: boolean
  showLoading?: boolean
  width?: number | string
  height?: number | string
  color?: string
}

const PlaceholderTag = ({
  circle,
  width,
  height,
  color,
  showLoading
}: PlaceholderTagProps) => {
  return (
    <Container
      data-circle={circle}
      style={{ width, height, backgroundColor: color }}
    >
      {showLoading && <LoadingLoop />}
    </Container>
  )
}

export default PlaceholderTag
