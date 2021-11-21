import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newMovieData: null,
  newMovieStep: 0,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNewMovieData: (state, action) => {
      state.newMovieData = action.payload;
    },
    setNewMovieStep: (state, action) => {
      state.newMovieStep = action.payload;
    },
  },
});

export const { setNewMovieData, setNewMovieStep } = moviesSlice.actions;

export default moviesSlice.reducer;
