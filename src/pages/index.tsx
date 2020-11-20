import NavLink from '../atoms/NavLink';
import { Title, MainContainer } from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <MainContainer>
      <Title>Hello NextJs</Title>
      <NavLink href="/search">Teste</NavLink>
    </MainContainer>
  );
}
