import { configureStore } from '@reduxjs/toolkit';
import baseApi from '../api/baseApi';
import rootReducer from './modules';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
