import {
  PHOTOS_REQUEST,
  PHOTOS_REQUEST_SUCCESS,
  PHOTOS_REQUEST_SUCCESS_AFTER,
  PHOTOS_REQUEST_ERROR,
} from './action';

const initialState = {
  loading: false,
  photos: {},
  error: '',
  count: 1,
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
        count: state.count + 1,
      };
    case PHOTOS_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...action.data],
        error: '',
        count: state.count + 1,
      };
    case PHOTOS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        count: 0,
      };
    default:
      return state;
  }
};
