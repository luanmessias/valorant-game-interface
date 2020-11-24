import BannerNews from '@/molecules/BannerNews';
import GameModes from '@/molecules/GameModes';
import UpdateNotes from '@/molecules/UpdateNotes';
import { Container } from './Styles';

export default function AsideLeftHome(): JSX.Element {
  return (
    <Container>
      <BannerNews />
      <UpdateNotes />
      <GameModes />
    </Container>
  );
}
