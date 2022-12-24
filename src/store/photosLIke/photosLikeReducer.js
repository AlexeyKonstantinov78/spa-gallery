import {
  PHOTOSLIKES_REQUEST,
  PHOTOSLIKES_REQUEST_SUCCESS,
  PHOTOSLIKES_REQUEST_ERROR,
  PHOTOSLIKES_REQUEST_LOGOUT,
} from './photosLikeAction';

const initialState = {
  loading: false,
  photosLike: {},
  error: '',
};

export const photosLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOSLIKES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PHOTOSLIKES_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        photosLike: action.data,
        error: '',
      };
    case PHOTOSLIKES_REQUEST_LOGOUT:
      return {
        ...state,
        loading: false,
        photosLike: {},
        error: '',
      };
    case PHOTOSLIKES_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        photosLike: {},
        error: action.error,
      };
    default:
      return state;
  }
};
