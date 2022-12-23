import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { photoAsync } from '../../store/photo/actionPhoto';
import _ from './Photo.module.css';

export const Photo = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo.photo);

  useEffect(() => {
    dispatch(photoAsync(param));
  }, []);

  console.log(photo);
  return (
    <main className={_.main}></main>
  );
};
