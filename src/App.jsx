import './App.css';
import { Provider } from 'react-redux';
import { Container } from './components/container/Container';
import { Header } from './components/header/Header';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
      </Container>
    </Provider>
  );
}

export default App;
