import GearConfig from '@/svg/gear-config.svg';
import Link from 'next/link';
import { Container } from './Styles';

function SettingsLink(): JSX.Element {
  return (
    <Container>
      <Link href="/settings">
        <a>
          <GearConfig width="40px" height="40px" />
        </a>
      </Link>
    </Container>
  );
}

export default SettingsLink;
