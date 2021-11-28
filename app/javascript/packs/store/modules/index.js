import { combineReducers } from 'redux';
import baseApi from '../../api/baseApi';
import bookings from './bookings/slice';
import movies from './movies/slice';

export default combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  bookings,
  movies,
});
