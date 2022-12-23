/* eslint-disable no-unused-vars */
import './App.css';
import { useDispatch } from 'react-redux';
import { Container } from './components/container/Container';
import { Header } from './components/header/Header';
import { updateToken } from './store/tokenReducer';
import { getToken } from './API/token';
import { Main } from './components/main/Main';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
