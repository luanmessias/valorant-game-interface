import React from 'react'
import Link from 'next/link'
import ValorantLogo from '@/svg/valorant-logo.svg'
import { Container } from './Styles'

const ValorantGameLink: React.FC = () => {
  return (
    <Container
      whileHover={{
        position: 'relative',
        zIndex: 1,
        borderColor: '#FF4655',
        backgroundColor: '#FF4655',
        scale: [1, 1.5, 1],
        borderRadius: ['0%', '20%', '50%'],
        transition: {
          duration: 0.3
        }
      }}
    >
      <Link href="https://playvalorant.com/en-gb/">
        <a target="_blank" rel="noreferrer" className="ValorantGameLink">
          <ValorantLogo width="30px" height="30px" />
        </a>
      </Link>
    </Container>
  )
}

export default ValorantGameLink
