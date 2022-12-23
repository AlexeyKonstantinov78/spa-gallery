/* eslint-disable indent */
/* eslint-disable key-spacing */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosAsync } from '../../store/photos/action';
import './masonry.css';
import style from './main.module.css';
import Masonry from 'react-masonry-css';
import { Photos } from '../photos/Photos';

const breakpointColumnsObj = {
  default: 4, 1100
: 3, 700
: 2, 500
: 1
};

export const Main = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const endList = useRef(null);

  useEffect(() => {
    dispatch(photosAsync());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(photosAsync());
      }
    }, {
      rootMargin: '700px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  console.log(photos);

  return (
    <main className={style.main}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {photos.length &&
          photos.map((photo) => <Photos key={photo.id} photo={photo} />)
        }
      </Masonry>
      <div ref={endList} className={style.endlist}></div>
    </main>
  );
};
