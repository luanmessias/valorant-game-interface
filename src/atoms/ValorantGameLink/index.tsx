import Link from 'next/link';
import ValorantLogo from '@/svg/valorant-logo.svg';
import { Container } from './Styles';

function ValorantGameLink(): JSX.Element {
  return (
    <Container>
      <Link href="https://playvalorant.com/en-gb/">
        <a target="_blank" className="ValorantGameLink">
          <ValorantLogo width="30px" height="30px" />
        </a>
      </Link>
    </Container>
  );
}

export default ValorantGameLink;
