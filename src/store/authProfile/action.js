import axios from 'axios';
import { API_URL } from '../../components/util/const';

export const AUTH_PROFILE_REQUEST = 'AUTH_PROFILE_REQUEST';
export const AUTH_PROFILE_REQUEST_SUCCESS = 'AUTH_PROFILE_REQUEST_SUCCESS';
export const AUTH_PROFILE_REQUEST_ERROR = 'AUTH_PROFILE_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authProfileRequest = () => ({
  type: AUTH_PROFILE_REQUEST,
});

export const authProfileRequestSuccess = (data) => ({
  type: AUTH_PROFILE_REQUEST_SUCCESS,
  data,
});

export const authProfileRequestError = (error) => ({
  type: AUTH_PROFILE_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authProfileAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(authProfileRequest());
  axios
    .get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({
      data: {
        name,
        profile_image: {
          small: image,
        }
      }
    }) => {
      const data = { name, image };
      dispatch(authProfileRequestSuccess(data));
    })
    .catch((err) => {
      dispatch(authProfileRequestError(err.toString()));
    });
};
