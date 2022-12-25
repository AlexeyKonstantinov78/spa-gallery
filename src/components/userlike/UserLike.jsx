/* eslint-disable indent */
/* eslint-disable key-spacing */
import { useParams } from 'react-router-dom';
import _ from './UserLike.module.css';
import Masonry from 'react-masonry-css';
import './masonry.css';
import { useDispatch, useSelector } from 'react-redux';
import { Photos } from '../photos/Photos';
import { useEffect } from 'react';
import { photosLikeAsync } from '../../store/photosLIke/photosLikeAction';

const breakpointColumnsObj = {
  default: 4, 1100
    : 3, 700
    : 2, 500
    : 1
};

export const UserLike = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const photosLike = useSelector((state) => state.photosLike.photosLike);

  useEffect(() => {
    dispatch(photosLikeAsync(param));
  }, []);

  return (
    <main className={_.userLike__main}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {photosLike.length &&
          photosLike.map((photo) => <Photos key={photo.id} photo={photo} list='userlike' />)
        }
      </Masonry>
    </main>
  );
};
