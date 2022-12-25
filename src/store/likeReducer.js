import axios from 'axios';
import { API_URL, ACCESS_KEY } from '../components/util/const';

const UPDATE_LIKE = 'UPDATE_LIKE';
const DELETE_LIKE = 'DELETE_LIKE';

export const updateLike = () => ({
  type: UPDATE_LIKE,
});

export const deleteLike = () => ({
  type: DELETE_LIKE,
});

export const updateLikeAsync = ({ id }) => (dispatch, getState) => {
  const token = getState().token.token;

  const url = `${API_URL}/photos/${id}/like?client_id=${ACCESS_KEY}`;

  const option = {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    url,
  };

  axios(option).then((response) => {
    dispatch(updateLike());
  }).catch((error) => {
    console.log(error.toString());
  });
};

export const deleteLikeAsync = ({ id }) => (dispatch, getState) => {
  const token = getState().token.token;

  axios.delete(`${API_URL}/photos/${id}/like?client_id=${ACCESS_KEY}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch(deleteLike());
  }).catch((error) => {
    console.log(error.toString());
  });
};
