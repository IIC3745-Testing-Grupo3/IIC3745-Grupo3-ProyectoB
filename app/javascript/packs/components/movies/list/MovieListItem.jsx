import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import MovieScreeningItem from './MovieScreeningItem';

export default function MovieListItem({ id, poster, name, screenings }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia component="img" height="200" image={poster} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <MovieScreeningItem screenings={_.groupBy(screenings, 'schedule')} />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/movies/${id}/bookings/new`)}
        >
          Reservar Entradas
        </Button>
      </CardActions>
    </Card>
  );
}

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  screenings: PropTypes.arrayOf(PropTypes.object).isRequired,
};
