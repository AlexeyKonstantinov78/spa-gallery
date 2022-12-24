import { Auth } from './auth/Auth';
import style from './Header.module.css';
import { ReactComponent as BtnLike } from '../image/like.svg';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const token = useSelector((state) => state.token.token);
  const username = useSelector((state) => state.authProfile.data.username);
  const navigator = useNavigate();

  console.log();

  return (
    <header className={style.header}>
      <Link to={'/'} className={style.logo} >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          version='1.1'
          aria-labelledby='unsplash-home'
          aria-hidden='false'>
          <desc lang='en-US'>Unsplash logo</desc>
          <title id='unsplash-home'>Unsplash Home</title>
          <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z'></path>
        </svg>
      </Link>
      <dir className={style.header__search} onClick={() => {
        navigator('/search');
      }}>
        Поиск фотографий
      </dir>
      {token &&
        <div
          className={style.header__btnLike}
          onClick={() => {
            navigator(`/users/${username}/likes`);
          }}>
          <BtnLike className={style.header__btnLike}/>
          <p>
            Список лайкнутых
          </p>
        </div>
      }
      <Auth />
    </header>
  );
};
