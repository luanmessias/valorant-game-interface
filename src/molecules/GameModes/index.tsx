import ModeRankedSVG from '@/svg/gm-ranked.svg';
import ModeSpikeSVG from '@/svg/gm-spike.svg';
import ModeDMSVG from '@/svg/gm-deathmath.svg';
import ApiData from '@/hooks/SwrFetchHook';
import { Container, Content, DecorativeBar, ModeBox, Title } from './Styles';

interface DependData {
  [key: string]: string;
}

export default function GameModes(): JSX.Element {
  const { data, isLoading, isError } = ApiData('most_played_modes');

  if (isLoading) return <h1>carregando</h1>;
  if (isError) return <h1>deu ruim</h1>;

  function getGameModeSymbol(mode: string): JSX.Element {
    switch (mode) {
      case 'ranked':
        return <ModeRankedSVG />;
        break;
      case 'casual':
        return <ModeRankedSVG />;
        break;
      case 'spike':
        return <ModeSpikeSVG />;
        break;
      case 'dm':
        return <ModeDMSVG />;
        break;
      default:
        return <ModeRankedSVG />;
    }
  }

  return (
    <Container>
      <DecorativeBar />
      <Title>MODOS EM DESTAQUE</Title>
      <Content>
        {data.map((gm: DependData) => {
          return (
            <ModeBox key={gm.id}>
              <div className="symbol">{getGameModeSymbol(gm.id)}</div>
              <div className="name">{gm.title}</div>
              <div className="time">{gm.time}</div>
            </ModeBox>
          );
        })}
      </Content>
      <DecorativeBar />
    </Container>
  );
}
