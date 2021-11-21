import React from 'react';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NewMoviePage from './NewMoviePage';
import Navbar from '../components/layout/Navbar';

export default function Pages() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container sx={{ my: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/new" element={<NewMoviePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
