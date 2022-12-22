import {
  PHOTOS_REQUEST,
  PHOTOS_REQUEST_SUCCESS,
  PHOTOS_REQUEST_ERROR,
} from './action';

const initialState = {
  loading: false,
  photos: {},
  error: '',
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PHOTOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.data,
        error: '',
      };
    case PHOTOS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        photos: {},
        error: action.error,
      };
    default:
      return state;
  }
};
