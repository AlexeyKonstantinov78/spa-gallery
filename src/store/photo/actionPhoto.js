import { API_URL, ACCESS_KEY } from '../../components/util/const';
import { requestAxios } from '../../API/requestAxios';

export const PHOTO_REQUEST = 'PHOTO_REQUEST';
export const PHOTO_REQUEST_SUCCESS = 'PHOTO_REQUEST_SUCCESS';
export const PHOTO_REQUEST_ERROR = 'PHOTO_REQUEST_ERROR';

export const photoRequest = () => ({
  type: PHOTO_REQUEST,
});

export const photoRequestSuccess = (data) => ({
  type: PHOTO_REQUEST_SUCCESS,
  data,
});

export const photoRequestError = (error) => ({
  type: PHOTO_REQUEST,
  error,
});

export const photoAsync = ({ id }) => (dispatch, getState) => {
  const token = getState().token.token;
  const loading = getState().photo.loading;
  const url = `${API_URL}/photos/${id}?client_id=${ACCESS_KEY}`;

  if (loading) return;

  dispatch(photoRequest());

  requestAxios(url, token, (data) => {
    dispatch(photoRequestSuccess(data));
  }, (error) => {
    dispatch(photoRequestError(error.toString()));
  });
};
