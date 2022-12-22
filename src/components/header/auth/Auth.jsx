/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import axios from 'axios';
import { url, API_URL } from '../../util/const';
import style from './Auth.module.css';
import { useEffect } from 'react';
import {
  authProfileRequest,
  authProfileRequestSuccess,
  authProfileRequestError,
} from '../../../store/authProfile/action';

export const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  console.log(token);
  useEffect(() => {
    if (!token) return;
    dispatch(authProfileRequest());
    axios
      .get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({
        data: {
          name,
          profile_image: {
            small: image,
          }
        }
      }) => {
        const data = { name, image };
        dispatch(authProfileRequestSuccess(data));
        console.log(name);
        console.log(image);
      })
      .catch((err) => {
        dispatch(authProfileRequestError(err.message));
        console.log(err.message);
      });
  }, [token]);

  const hendlerDeleteToken = (event) => {
    event.preventDefault();
    dispatch(deleteToken(''));
  };

  return (
    <div className={style.auth}>
      {!token && (
        <a className={style.login} href={url}>
          Вход
        </a>
      )}
      {token && (
        <dir className={style.login}>
          <a href='#' onClick={hendlerDeleteToken}>
            Выход
          </a>
        </dir>
      )}
    </div>
  );
};
