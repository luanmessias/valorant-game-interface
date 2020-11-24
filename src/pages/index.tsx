import FrontLogo from '@/molecules/FrontLogo';
import AsideLeftHome from '@/organisms/AsideLeftHome';
import AsideRightHome from '@/organisms/AsideRightHome';
import { Container } from '@/pageStyles/home';

export default function Home(): JSX.Element {
  return (
    <Container>
      <AsideLeftHome />
      <FrontLogo />
      <AsideRightHome />
    </Container>
  );
}
