import {combineReducers} from 'redux';
import {messages} from './messages';

const createRootReducer = () => combineReducers({messages});

export {createRootReducer};
