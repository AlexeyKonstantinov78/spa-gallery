import axios from 'axios';
import { API_URL, ACCESS_KEY } from '../../components/util/const';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARCH_REQUEST_ERROR';

export const serachRequest = () => ({
  type: SEARCH_REQUEST,
});

export const serachRequestSuccess = (data, search) => ({
  type: SEARCH_REQUEST_SUCCESS,
  data,
  search,
});

export const serachRequestError = (error) => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});

export const searchPhotosAsync = (search) => (dispatch, getState) => {
  const token = getState().token.token;
  const loading = getState().searchPhotos.loading;

  if (loading) return;

  dispatch(serachRequest());

  axios.get(
    `${API_URL}/search/photos?query=${search}&client_id=${ACCESS_KEY}&lang=ru&per_page=30`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  )
    .then(({ data }) => {
      dispatch(serachRequestSuccess(data, search));
    })
    .catch((error) => {
      dispatch(serachRequestError(error.toString()));
    });
};

