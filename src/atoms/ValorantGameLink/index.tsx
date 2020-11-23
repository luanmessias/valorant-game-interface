import Link from 'next/link';
import ValorantLogo from '@/svg/valorant-logo.svg';
import { Container } from './Styles';

function ValorantGameLink(): JSX.Element {
  return (
    <Container
      whileHover={{
        position: 'relative',
        zIndex: 1,
        borderColor: 'red',
        scale: [1, 1.4, 1.2],
        rotate: [0, 10, -10, 0],
        filter: [
          'hue-rotate(0) contrast(100%)',
          'hue-rotate(360deg) contrast(200%)',
          'hue-rotate(45deg) contrast(300%)',
          'hue-rotate(0) contrast(100%)',
        ],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Link href="https://playvalorant.com/en-gb/">
        <a target="_blank" className="ValorantGameLink">
          <ValorantLogo width="30px" height="30px" />
        </a>
      </Link>
    </Container>
  );
}

export default ValorantGameLink;
