/* eslint-disable no-unused-vars */
import './App.css';
import { useDispatch } from 'react-redux';
import { Container } from './components/container/Container';
import { Header } from './components/header/Header';
import { updateToken } from './store/tokenReducer';
import { getToken } from './API/token';
import { Main } from './components/main/main';
import { Route, Routes } from 'react-router-dom';
import { Photo } from './components/photo/Photo';
import { UserLike } from './components/userlike/UserLike';
import { Search } from './components/search/Search';

function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <Container>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route
          path='/photos/:id'
          element={
            <>
              <Header />
              <Photo />
            </>
          }
        />
        <Route
          path='/users/:username/likes'
          element={
            <>
              <Header />
              <UserLike />
            </>
          }
        />
        <Route
          path='/search'
          element={
            <>
              <Header />
              <Search />
            </>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
