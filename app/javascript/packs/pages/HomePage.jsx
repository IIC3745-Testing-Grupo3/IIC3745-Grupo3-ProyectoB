import React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/movies/list/MovieList';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="h4">Películas</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            endIcon={<Add />}
            onClick={() => navigate('/movies/new')}
          >
            Agregar película
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <MovieList />
    </>
  );
}
