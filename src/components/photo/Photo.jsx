/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { photoAsync } from '../../store/photo/actionPhoto';
import _ from './Photo.module.css';
import { formDate } from '../util/formDate';
import { deleteLikeAsync, updateLikeAsync } from '../../store/likeReducer';
import { ReactComponent as ButtonLIkeIcon } from '../image/like.svg';

export const Photo = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photo.photo);
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    dispatch(photoAsync(param));
  }, []);

  const clickedLike = (event) => {
    if (photo.liked_by_user && token) {
      dispatch(deleteLikeAsync(param));
    }

    if (!photo.liked_by_user && token) {
      dispatch(updateLikeAsync(param));
    }

    setTimeout(() => {
      dispatch(photoAsync(param));
    }, 500);
  };

  console.log(photo);

  return (
    <main className={_.main}>
      {photo.id &&
        <>
          <div className={_.photo__autor_date}>
            <div className={_.photo_autors}>
              <img
                className={_.photo_autors_img}
                src={photo.user.profile_image.small}
                alt={photo.user.name}
              />
              <a
                className={_.photo_autors_link}
                href={photo.user.links.html}
                target='_blank'>
                {photo.user.name}
              </a>
            </div>
            <data
              className={_.photo__date}
              value={photo.created_at}
              title={formDate(photo.created_at)}>
              {formDate(photo.created_at)}
            </data>
          </div>
          <img className={_.photo__img} src={photo.urls.regular} alt={photo.description} />
          <div className={_.photo__like}>
            <strong title={photo.likes} >{photo.likes}</strong>
            <button className={_.photo__btn} onClick={clickedLike}>
              <ButtonLIkeIcon className={_.photo__like_svg} aria-checked={photo.liked_by_user} />
            </button>
          </div>
        </>
      }
    </main>
  );
};
