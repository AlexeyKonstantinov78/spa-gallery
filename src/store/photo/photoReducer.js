import {
  PHOTO_REQUEST,
  PHOTO_REQUEST_SUCCESS,
  PHOTO_REQUEST_ERROR,
} from './actionPhoto';

const initialState = {
  loading: false,
  photo: {},
  error: '',
};

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PHOTO_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        photo: action.data,
        error: '',
      };
    case PHOTO_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
