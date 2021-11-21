import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newMovieData: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setNewMovieData: (state, action) => {
      state.newMovieData = action.payload;
    },
  },
});

export const { setNewMovieData } = moviesSlice.actions;

export default moviesSlice.reducer;
