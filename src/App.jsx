/* eslint-disable no-unused-vars */
import './App.css';
import { useDispatch } from 'react-redux';
import { Container } from './components/container/Container';
import { Header } from './components/header/Header';
import { updateToken } from './store/tokenReducer';
import { getToken } from './API/token';
import { Main } from './components/main/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <Container>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Main />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
