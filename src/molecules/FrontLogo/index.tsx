import FrontLogoSvg from '@/svg/logo-front.svg';
import { Container, CurrentAct } from './Styles';

export default function FrontLogo(): JSX.Element {
  return (
    <Container>
      <FrontLogoSvg />
      <CurrentAct>IGNIÇÃO: ATO 3</CurrentAct>
    </Container>
  );
}
