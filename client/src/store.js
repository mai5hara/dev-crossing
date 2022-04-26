import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './store/features';

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
})

export default store;