import { Container, Content } from './Styles';

const UpdateNotes: React.FC = () => {
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

export default UpdateNotes
