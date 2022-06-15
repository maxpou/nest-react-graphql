import { Container, Header, Content } from 'rsuite';
import { CompaniesList } from './components/CompaniesList';
import { OrdersList } from './components/OrdersList';

function App(): JSX.Element {
  return (
    <Container style={{ width: '800px', margin: 'auto' }}>
      <Header>
        <h1>🚜 My cool App 🚜</h1>
      </Header>
      <Content>
        <CompaniesList />
        <br />
        <OrdersList />
      </Content>
    </Container>
  );
}

export default App;
