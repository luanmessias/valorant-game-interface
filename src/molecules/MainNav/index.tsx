import Image from 'next/image';
import NavLink from '../../atoms/NavLink';
import ApiData from '../../hooks/SwrFetchHook';
import { Container, SvgPlay } from './Styles';

export default function MainNav(): JSX.Element {
  const { data, isLoading, isError } = ApiData('categories');

  if (isLoading) return <h1>carregando</h1>;
  if (isError) return <h1>deu ruim</h1>;

  return (
    <Container>
      <ul>
        {data.map(category => {
          return (
            <li
              key={category.id}
              {...(category.id === 'jogar' ? { className: 'play' } : {})}
            >
              <NavLink href={category.url}>{category.title}</NavLink>
            </li>
          );
        })}
      </ul>
      <SvgPlay>
        <Image src="/svg/main-nav-center.svg" width="354" height="55" />
      </SvgPlay>
    </Container>
  );
}
