import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import thunk from 'redux-thunk';
import { authProfileReducer } from './authProfile/authProfileReducer';
import { photosReducer } from './photos/photosReducer';
import { photoReducer } from './photo/photoReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  authProfile: authProfileReducer,
  photos: photosReducer,
  photo: photoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
