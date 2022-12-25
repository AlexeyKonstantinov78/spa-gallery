/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import _ from './Photos.module.css';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { formDate } from '../util/formDate';
import { ReactComponent as ButtonLIkeIcon } from '../image/like.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLikeAsync, updateLikeAsync } from '../../store/likeReducer';
import { photosAsync } from '../../store/photos/action';
import { photosLikeAsync } from '../../store/photosLIke/photosLikeAction';
import { searchPhotosAsync } from '../../store/search/searchAction';

const withHeigt = (w, h) => (400 / (w / h));

export const Photos = ({ photo, list }) => {
  const token = useSelector((state) => state.token.token);
  const search = useSelector((state) => state.searchPhotos.search);
  const dispatch = useDispatch();
  const params = useParams();

  const clickedLike = (id) => {
    if (photo.liked_by_user && token) {
      dispatch(deleteLikeAsync({ id }));
    }

    if (!photo.liked_by_user && token) {
      dispatch(updateLikeAsync({ id }));
    }

    setTimeout(() => {
      if (list === 'home') {
        dispatch(photosAsync(1));
      }
      if (list === 'userlike') {
        dispatch(photosLikeAsync(params));
      }

      if (list === 'search') {
        dispatch(searchPhotosAsync(search));
      }
    }, 500);
  };

  const styleImg = {
    height: withHeigt(photo.width, photo.height),
    objectFit: 'cover'
  };

  return (
    <div
      className={_.photos_div}
      key={photo.blur_hash}>
      <Link to={`/photos/${photo.id}`}>
        <data
          className={_.photos__date}
          value={photo.updated_at}
          title={formDate(photo.updated_at)}>
          {formDate(photo.updated_at)}
        </data>
        <img
          style={styleImg}
          className={_.photos_img}
          src={photo.urls.small}
          alt={photo.description}
        />
      </Link>
      <div className={_.photos_autors}>
        <img
          className={_.photos_autors_img}
          src={photo.user.profile_image.small}
          alt={photo.user.name}
        />
        <a
          className={_.photos_autors_link}
          href={photo.user.links.html}
          target='_blank'>
          {photo.user.name}
        </a>
      </div>
      <div className={_.photos__like}>
        <strong title={photo.likes}>{photo.likes}</strong>
        <ButtonLIkeIcon
          className={_.photos__like_svg}
          aria-checked={photo.liked_by_user}
          onClick={() => {
            clickedLike(photo.id);
          }}
        />
      </div>
    </div>
  );
};

Photos.propTypes = {
  photo: PropTypes.object,
  list: PropTypes.string,
};
