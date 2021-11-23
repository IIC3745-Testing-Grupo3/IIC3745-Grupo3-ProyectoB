import * as React from 'react';
import Grid from '@mui/material/Grid';
import MovieListItem from './MovieListItem';
import Loading from '../../ui/Loading';
import { useGetMoviesQuery } from '../../../api/moviesApi';

export default function MovieList() {
  const { data, isLoading } = useGetMoviesQuery();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map(({ id, poster, name, screenings }) => (
        <Grid item key={id} lg={3} md={6} xs={12}>
          <MovieListItem poster={poster} name={name} screenings={screenings} />
        </Grid>
      ))}
    </Grid>
  );
}
