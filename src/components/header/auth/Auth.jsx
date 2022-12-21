import { useDispatch, useSelector } from 'react-redux';
import { updateCommentAndToken } from '../../../store/tokenReducer';
import url from '../../util/const';
import style from './Auth.module.css';

export const Auth = () => {
  const comment = useSelector((state) => state.token.comment);
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  console.log(comment);
  console.log(token);

  const handleChange = () => {
    dispatch(updateCommentAndToken('Hello Redux and Token'));
  };

  if (new URLSearchParams(location.search).get('code')) {
    handleChange();
  }

  return (
    <div className={style.auth}>
      {!token && (
        <a className={style.login} href={url} >
          Вход
        </a>
      )}
      {token && (
        <dir className={style.login}>
          <a href='#'>Выход</a>
        </dir>
      )}
    </div>
  );
};
