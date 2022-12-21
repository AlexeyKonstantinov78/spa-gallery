import { getToken, setToken } from '../API/token';

// стартовый state
const initialState = {
  comment: 'hello redux',
  token: getToken(),
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';


export const updateCommentAndToken = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = (token) => ({
  type: DELETE_TOKEN,
  token,
});

// корневой редусер
export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };
    case DELETE_TOKEN:
      setToken('');
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
