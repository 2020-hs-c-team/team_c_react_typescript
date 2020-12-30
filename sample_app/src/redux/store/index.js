import {initialState} from './initialState';
import {createRootReducer} from '../reducers';
import {createStore} from 'redux';

export const configureStore = () => {
  const store = createStore(createRootReducer(), initialState);
  return store;
};
