import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer } from './tokenReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
