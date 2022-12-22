/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { url } from '../../util/const';
import style from './Auth.module.css';
import { useEffect } from 'react';
import {
  authLogout, authProfileAsync,
} from '../../../store/authProfile/action';

export const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const name = useSelector((state) => state.authProfile.data.name);
  const linkImage = useSelector((state) => state.authProfile.data.image);
  console.log(token);

  useEffect(() => {
    dispatch(authProfileAsync());
  }, [token]);

  const hendlerDeleteToken = (event) => {
    event.preventDefault();
    dispatch(deleteToken(''));
    dispatch(authLogout());
  };

  console.log(name);
  console.log(linkImage);

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
