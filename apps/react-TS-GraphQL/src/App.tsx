import React from 'react';
import { Container, Header, Content } from 'rsuite';
import { CompaniesList } from './components/CompaniesList';

function App() {
  return (
    <Container>
      <Header>
        <h1>🚜 My cool App 🚜</h1>
      </Header>
      <Content>
        <CompaniesList />
      </Content>
    </Container>
  );
}

export default App;
