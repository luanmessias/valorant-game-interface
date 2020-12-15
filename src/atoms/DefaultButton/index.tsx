import React, { LinkHTMLAttributes } from 'react'

import Link from 'next/link'

import { Container, Content } from './Styles'

type linkProps = LinkHTMLAttributes<HTMLLinkElement>

const DefaultButton: React.FC<linkProps> = ({ href, children, className }) => {
  return (
    <Link href={href} passHref>
      <Container className={className}>
        <div className="dot dot--tl"></div>
        <div className="dot dot--tr"></div>
        <div className="dot dot--bl"></div>
        <div className="dot dot--br"></div>
        <Content>{children}</Content>
      </Container>
    </Link>
  )
}

export default DefaultButton
