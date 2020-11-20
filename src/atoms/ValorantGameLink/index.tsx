import Image from 'next/image';
import Link from 'next/link';

function ValorantGameLink(): JSX.Element {
  return (
    <Link href="https://playvalorant.com/en-gb/">
      <a target="_blank">
        <Image src="/svg/valorant-logo-square.svg" width="30px" height="30px" />
      </a>
    </Link>
  );
}

export default ValorantGameLink;
