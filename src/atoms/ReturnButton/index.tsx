import React from 'react'
import { Container } from './Styles'
import ReturnSVG from '@/svg/return-button.svg'
import Link from 'next/link'

const ReturnButton: React.FC = () => {
  return (
    <Link href="/">
      <Container>
        <ReturnSVG />
        RETURN
      </Container>
    </Link>
  )
}

export default ReturnButton
