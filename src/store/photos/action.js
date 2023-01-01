import { API_URL, ACCESS_KEY } from '../../components/util/const';
import { requestAxios } from '../../API/requestAxios';

export const PHOTOS_REQUEST = 'PHOTOS_REQUEST';
export const PHOTOS_REQUEST_SUCCESS = 'PHOTOS_REQUEST_SUCCESS';
export const PHOTOS_REQUEST_SUCCESS_AFTER = 'PHOTOS_REQUEST_SUCCESS_AFTER';
export const PHOTOS_REQUEST_ERROR = 'PHOTOS_REQUEST_ERROR';

export const photosRequest = () => ({
  type: PHOTOS_REQUEST,
});

export const photosRequestSuccess = (data) => ({
  type: PHOTOS_REQUEST_SUCCESS,
  data,
});

export const photosRequestSuccessAfter = (data) => ({
  type: PHOTOS_REQUEST_SUCCESS_AFTER,
  data,
});

export const photosRequestError = (error) => ({
  type: PHOTOS_REQUEST_ERROR,
  error,
});

export const photosAsync = (count) => (dispatch, getState) => {
  const token = getState().token.token;
  const loading = getState().photos.loading;

  if (!count) {
    count = getState().photos.count;
  }

  const url =
    `${API_URL}/photos?client_id=${ACCESS_KEY}&per_page=30&order_by=popular&page=${count}`;

  if (loading) return;
  dispatch(photosRequest());

  if (count >= 2) {
    requestAxios(url, token, (data) => {
      dispatch(photosRequestSuccessAfter(data));
    }, (error) => {
      dispatch(photosRequestError(error.toString()));
    });
  } else {
    requestAxios(url, token, (data) => {
      dispatch(photosRequestSuccess(data));
    }, (error) => {
      dispatch(photosRequestError(error.toString()));
    });
  }
};
