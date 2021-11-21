import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newMovieData: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNewMovie: (state, payload) => {
      state.newMovieData = payload;
    },
  },
});

export const { setNewMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
