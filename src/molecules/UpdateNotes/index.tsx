import { Container, Content } from './Styles';

export default function UpdateNotes(): JSX.Element {
  return (
    <Container>
      <div className="dot topLeft" />
      <div className="dot TopRight" />
      <div className="dot BottomLeft" />
      <div className="dot BottomRight" />
      <Content>
        <div>NOTAS DE ATUALIZAÇÕES</div>
        <span>1.12</span>
      </Content>
    </Container>
  );
}
