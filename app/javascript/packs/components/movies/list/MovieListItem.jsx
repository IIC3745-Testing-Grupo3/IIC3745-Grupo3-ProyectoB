import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import MovieScreeningItem from './MovieScreeningItem';

export default function MovieListItem({ movie }) {
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={movie.poster}
        alt={movie.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <MovieScreeningItem
          screenings={_.groupBy(movie.screenings, 'schedule')}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Reservar Entradas</Button>
      </CardActions>
    </Card>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
    screenings: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
