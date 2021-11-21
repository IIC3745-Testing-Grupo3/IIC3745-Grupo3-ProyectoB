import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NewMovieForm from '../components/movies/NewMovieForm';

export default function NewMoviePage() {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4">Nueva película</Typography>
      <NewMovieForm />
    </Container>
  );
}
