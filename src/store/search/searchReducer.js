import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_ERROR,
} from './searchAction';

const initialState = {
  loading: false,
  search: '',
  searchPhotos: {},
  error: '',
};

export const searchPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        loading: false,
        search: action.search,
        searchPhotos: action.data,
        error: '',
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        searchPhotos: {},
        error: action.error,
      };
    default:
      return state;
  }
};
