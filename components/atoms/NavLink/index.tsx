import React, { LinkHTMLAttributes } from 'react'
import Link from 'next/link'

import { Container } from './Styles'

type linkProps = LinkHTMLAttributes<HTMLLinkElement>

const NavLink: React.FC<linkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Container>{children}</Container>
    </Link>
  )
}

export default NavLink
