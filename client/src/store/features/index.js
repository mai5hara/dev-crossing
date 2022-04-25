import { combineReducers } from 'redux';
import alert from './alertSlice';
import auth from './authSlice';
import profile from './profileSlice';
import post from './postSlice';

export default combineReducers({
  alert,
  auth,
  profile,
  post
});