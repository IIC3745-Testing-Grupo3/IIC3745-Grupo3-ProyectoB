import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import NewMovieSuccessDialog from './NewMovieSuccessDialog';
import Loading from '../../ui/Loading';
import { setNewMovieStep } from '../../../store/modules/movies/slice';
import { useCreateMovieMutation } from '../../../api/moviesApi';

export default function NewMovieConfirmation() {
  const dispatch = useDispatch();
  const { newMovieData, newMovieScreenings } = useSelector(
    (state) => state.movies,
  );
  const [createMovie, { data, isLoading }] = useCreateMovieMutation();

  const submitMovie = () => {
    const screenings = Object.keys(newMovieScreenings).map((schedule) =>
      newMovieScreenings[schedule].map((room) => ({
        schedule,
        room,
      })),
    );
    createMovie({
      name: newMovieData.name,
      start_date: newMovieData.startDate,
      end_date: newMovieData.endDate,
      poster: newMovieData.poster,
      screenings: [...screenings[0], ...screenings[1], ...screenings[2]],
    });
  };

  return (
    <>
      {isLoading && <Loading />}
      <NewMovieSuccessDialog open={Boolean(data)} />
      <Typography variant="h5">Confirmar película</Typography>
      <Box sx={{ my: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Nombre:
          </Typography>{' '}
          {newMovieData.name}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Fecha de inicio:
          </Typography>{' '}
          {newMovieData.startDate}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Fecha de término:
          </Typography>{' '}
          {newMovieData.endDate}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Funciones:
          </Typography>
        </Box>
        {Object.keys(newMovieScreenings).map((schedule) =>
          newMovieScreenings[schedule].length > 0 ? (
            <Box key={schedule}>
              <Typography sx={{ fontWeight: 'bold' }}>{schedule}</Typography>
              <Typography>
                Sala {newMovieScreenings[schedule].join(', Sala ')}
              </Typography>
            </Box>
          ) : null,
        )}
      </Box>
      <Button
        variant="outlined"
        onClick={() => dispatch(setNewMovieStep(1))}
        sx={{ mr: 2 }}
      >
        Volver
      </Button>
      <Button variant="contained" onClick={submitMovie}>
        Confirmar
      </Button>
    </>
  );
}
