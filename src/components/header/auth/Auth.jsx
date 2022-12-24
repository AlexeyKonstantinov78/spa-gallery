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
import { photosAsync } from '../../../store/photos/action';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { photoAsync } from '../../../store/photo/actionPhoto';
import { photosLikeRequestLogout } from '../../../store/photosLIke/photosLikeAction';

export const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const name = useSelector((state) => state.authProfile.data.name);
  const linkImage = useSelector((state) => state.authProfile.data.image);
  const loading = useSelector((state) => state.authProfile.loading);
  const path = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authProfileAsync());
    if (path.id) {
      dispatch(photoAsync(path));
      return;
    }
    dispatch(photosAsync());
  }, [token]);

  const hendlerDeleteToken = (event) => {
    dispatch(deleteToken(''));
    dispatch(authLogout());
    navigate('/');
    if (path.id) {
      dispatch(photoAsync(path));
      return;
    }
    if (path.username) {
      dispatch(photosLikeRequestLogout());
      return;
    }
    dispatch(photosAsync());
  };

  console.log(path);

  return (
    <div className={style.auth}>
      {!token && (
        <dir className={style.login}>
          <a href={url}>
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
            <img className={style.profile__img} src={linkImage} alt={name} />
            <p>{name}</p>
          </div>
          <Link to={'/'} onClick={() => {
            hendlerDeleteToken();
          }}>
            Выход
          </Link>
        </dir>
      )}
    </div>
  );
};
