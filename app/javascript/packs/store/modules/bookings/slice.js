import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newBookingData: null,
  newBookingStep: 0,
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setNewBookingData: (state, action) => {
      state.newMovieData = action.payload;
    },
    setNewBookingStep: (state, action) => {
      state.newBookingStep = action.payload;
    },
    resetState: (state) => {
      state.newBookingData = initialState.newBookingData;
      state.newBookingStep = initialState.newBookingStep;
    },
  },
});

export const { setNewBookingData, setNewBookingStep, resetState } =
  bookingsSlice.actions;

export default bookingsSlice.reducer;
