import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import NewMovieConfirmation from '../components/movies/create/NewMovieConfirmation';
import NewMovieForm from '../components/movies/create/NewMovieForm';
import NewMovieScreenings from '../components/movies/create/NewMovieScreenings';
import NewMovieSteps from '../components/movies/create/NewMovieSteps';

export default function NewMoviePage() {
  const currentStep = useSelector((state) => state.movies.newMovieStep);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/" component={RouterLink}>
          Inicio
        </Link>
        <Typography color="text.primary">Nueva película</Typography>
      </Breadcrumbs>
      <Typography variant="h4">Nueva película</Typography>
      <Box sx={{ width: 0.5, my: 4 }}>
        <NewMovieSteps />
      </Box>
      {currentStep === 0 && <NewMovieForm />}
      {currentStep === 1 && <NewMovieScreenings />}
      {currentStep === 2 && <NewMovieConfirmation />}
    </>
  );
}
