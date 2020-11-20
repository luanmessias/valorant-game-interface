import Link from 'next/link';
import { LinkHTMLAttributes } from 'react';
import { Container } from './Styles';

type linkProps = LinkHTMLAttributes<HTMLButtonElement>;

function NavLink({ href, children }: linkProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <Container>{children}</Container>
    </Link>
  );
}

export default NavLink;
