import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newBookingData: null,
  newBookingStep: 0,
  roomData: {
    selectedSpots: [],
    selectedRow: null,
  },
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setNewBookingData: (state, action) => {
      state.newBookingData = action.payload;
    },
    setNewBookingStep: (state, action) => {
      state.newBookingStep = action.payload;
    },
    setSelectedSpots: (state, action) => {
      state.roomData.selectedSpots = action.payload;
    },
    setSelectedRow: (state, action) => {
      state.roomData.selectedRow = action.payload;
    },
    resetSpots: (state) => {
      state.roomData = initialState.roomData;
    },
    resetState: (state) => {
      state.roomData = initialState.roomData;
      state.newBookingData = initialState.newBookingData;
      state.newBookingStep = initialState.newBookingStep;
    },
  },
});

export const {
  setNewBookingData,
  setNewBookingStep,
  setSelectedSpots,
  setSelectedRow,
  resetSpots,
  resetState,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
