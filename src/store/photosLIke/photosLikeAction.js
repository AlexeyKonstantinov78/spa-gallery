import axios from 'axios';
import { API_URL, ACCESS_KEY } from '../../components/util/const';

export const PHOTOSLIKES_REQUEST = 'PHOTOSLIKES_REQUEST';
export const PHOTOSLIKES_REQUEST_SUCCESS = 'PHOTOSLIKES_REQUEST_SUCCESS';
export const PHOTOSLIKES_REQUEST_ERROR = 'PHOTOSLIKES_REQUEST_ERROR';
export const PHOTOSLIKES_REQUEST_LOGOUT = 'PHOTOSLIKES_REQUEST_ERROR';

export const photosLikeRequest = () => ({
  type: PHOTOSLIKES_REQUEST,
});

export const photosLikeRequestSuccess = (data) => ({
  type: PHOTOSLIKES_REQUEST_SUCCESS,
  data,
});

export const photosLikeRequestError = (error) => ({
  type: PHOTOSLIKES_REQUEST_ERROR,
  error,
});

export const photosLikeRequestLogout = () => ({
  type: PHOTOSLIKES_REQUEST_LOGOUT,
});

export const photosLikeAsync = ({ username }) => (dispatch, getState) => {
  const token = getState().token.token;
  const loading = getState().photosLike.loading;

  if (loading || !token) return;
  dispatch(photosLikeRequest());
  axios.get(
    `${API_URL}/users/${username}/likes?client_id=${ACCESS_KEY}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  ).then(({ data }) => {
    dispatch(photosLikeRequestSuccess(data));
  })
    .catch((error) => {
      dispatch(photosLikeRequestError(error.toString()));
    });
};
