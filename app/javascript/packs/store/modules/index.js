import { combineReducers } from 'redux';
import baseApi from '../../api/baseApi';
import movies from './movies/slice';

export default combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  movies,
});
