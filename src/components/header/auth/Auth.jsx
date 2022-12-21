import { getToken } from '../../../API/token';
import url from '../../util/const';
import style from './Auth.module.css';


export const Auth = () => {
  const token = getToken();

  return (
    <div className={style.auth}>
      {!token &&
        <a className={style.login} href={url}>Вход</a>
      }
      {token &&
        <dir className={style.login}>

          <a href="#">Выход</a>
        </dir>
      }
    </div>
  );
};
