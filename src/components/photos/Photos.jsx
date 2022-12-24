/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import _ from './Photos.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formDate } from '../util/formDate';
import { ReactComponent as ButtonLIkeIcon } from './img/like.svg';

export const Photos = ({ photo }) => {
  console.log();
  return (
    <div className={_.photos_div} key={photo.blur_hash}>
      <Link to={`/photos/${photo.id}`}>
        <data
          className={_.photos__date}
          value={photo.updated_at}
          title={formDate(photo.updated_at)}>
          {formDate(photo.updated_at)}
        </data>
        <img
          className={_.photos_img}
          src={photo.urls.regular}
          alt={photo.description}
        />

      </Link>
      <div className={_.photos_autors}>
        <img
          className={_.photos_autors_img}
          src={photo.user.profile_image.small}
          alt={photo.user.name}
        />
        <a className={_.photos_autors_link} href={photo.user.links.html} target='_blank'>
          {photo.user.name}
        </a>
      </div>
      <div className={_.photos__like}>
        <strong title={photo.likes} >{photo.likes}</strong>
        <ButtonLIkeIcon className={_.photos__like_svg} aria-checked={photo.liked_by_user} />
      </div>
    </div>
  );
};

Photos.propTypes = {
  photo: PropTypes.object,
};
