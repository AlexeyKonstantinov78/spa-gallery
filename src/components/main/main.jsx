import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosAsync } from '../../store/photos/action';
import style from './main.module.css';

export const Main = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);

  useEffect(() => {
    dispatch(photosAsync());
  }, []);

  console.log(photos);
  return (
    <main className={style.main}>
      main
    </main>
  );
};
