/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { url } from '../../util/const';
import style from './Auth.module.css';
import { useEffect } from 'react';
import {
  authLogout, authProfileAsync,
} from '../../../store/authProfile/action';
import PuffLoader from 'react-spinners/PuffLoader';

export const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const name = useSelector((state) => state.authProfile.data.name);
  const linkImage = useSelector((state) => state.authProfile.data.image);
  const loading = useSelector((state) => state.authProfile.loading);

  useEffect(() => {
    dispatch(authProfileAsync());
  }, [token]);

  const hendlerDeleteToken = (event) => {
    event.preventDefault();
    dispatch(deleteToken(''));
    dispatch(authLogout());
  };

  return (
    <div className={style.auth}>
      {!token && (
        <dir className={style.login}>
          <a className={style.login} href={url}>
            Вход
          </a>
        </dir>
      )}
      {token && (
        <dir className={style.login}>
          <div className={style.profilelogin}>
            {loading &&
              <PuffLoader color="#36d7b7" />
            }
            <img src={linkImage} alt={name} />
            <p>{name}</p>
          </div>
          <a href='#' onClick={hendlerDeleteToken}>
            Выход
          </a>
        </dir>
      )}
    </div>
  );
};
