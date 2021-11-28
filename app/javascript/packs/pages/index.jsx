import React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoomPage from './RoomPage';
import NewBookingPage from './NewBookingPage';
import HomePage from './HomePage';
import NewMoviePage from './NewMoviePage';
import NotFoundPage from './NotFoundPage';
import Navbar from '../components/layout/Navbar';

export default function Pages() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/new" element={<NewMoviePage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/movies/:id/bookings/new" element={<NewBookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
