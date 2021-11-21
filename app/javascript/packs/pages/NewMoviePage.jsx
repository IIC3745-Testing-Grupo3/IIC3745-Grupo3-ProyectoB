import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import NewMovieForm from '../components/movies/NewMovieForm';
import NewMovieSteps from '../components/movies/NewMovieSteps';

export default function NewMoviePage() {
  const currentStep = useSelector((state) => state.movies.newMovieStep);
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4">Nueva película</Typography>
      <Box sx={{ width: 0.5, my: 4 }}>
        <NewMovieSteps />
      </Box>
      {currentStep === 0 && <NewMovieForm />}
    </Container>
  );
}
