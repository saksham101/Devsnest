import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { applyMiddleware } from 'redux';

const rootReducer = combineReducers({ user: userReducer });
export default rootReducer;
