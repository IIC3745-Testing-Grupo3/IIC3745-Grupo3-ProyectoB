import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newMovieData: null,
  newMovieScreenings: {
    Matiné: [],
    Tanda: [],
    Noche: [],
  },
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
    setScreening: (state, action) => {
      const { schedule, rooms } = action.payload;
      state.newMovieScreenings[schedule] = rooms;
    },
    resetState: (state) => {
      state.newMovieData = initialState.newMovieData;
      state.newMovieScreenings = initialState.newMovieScreenings;
      state.newMovieStep = initialState.newMovieStep;
    },
    resetScreenings: (state) => {
      state.newMovieScreenings = initialState.newMovieScreenings;
    },
  },
});

export const {
  setNewMovieData,
  setNewMovieStep,
  setScreening,
  resetState,
  resetScreenings,
} = moviesSlice.actions;

export default moviesSlice.reducer;
