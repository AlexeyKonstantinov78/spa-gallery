import './App.css';
import { useDispatch } from 'react-redux';
import { Container } from './components/container/Container';
import { Header } from './components/header/Header';
import { updateToken } from './store/tokenReducer';
import { getToken } from './API/token';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
