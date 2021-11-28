import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setNewBookingStep } from '../../../store/modules/bookings/slice';
import { useCreateBookingMutation } from '../../../api/screeningsApi';
import Loading from '../../ui/Loading';
import NewBookingSuccessDialog from './NewBookingSuccessDialog';

export default function NewBookingConfirmation({ movieName, screenings }) {
  const dispatch = useDispatch();
  const { selectedSpots } = useSelector((state) => state.bookings.roomData);

  const { date, screening, booker } = useSelector(
    (state) => state.bookings.newBookingData,
  );

  const { schedule, room } = screenings.find(
    (element) => element.id === screening,
  );

  const selectedSpotsString = selectedSpots
    .map((spot) => `${spot.row}${spot.column}`)
    .join(', ');

  const [createBooking, { data, isLoading }] = useCreateBookingMutation();

  const submitBooking = () => {
    createBooking({
      body: { booker, date, seats: selectedSpots },
      screening,
    });
  };

  return (
    <Box>
      {isLoading && <Loading />}
      <NewBookingSuccessDialog open={Boolean(data)} />
      <Typography variant="h5">Confirmar reserva</Typography>
      <Box sx={{ my: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Título Película:
          </Typography>{' '}
          <Typography variant="subtitle" sx={{ display: 'inline' }}>
            {movieName}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Fecha:
          </Typography>{' '}
          {date}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Horario:
          </Typography>{' '}
          {schedule}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Sala:
          </Typography>{' '}
          {room}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ display: 'inline' }}>
            Puestos:
          </Typography>{' '}
          {selectedSpotsString}
        </Box>
      </Box>
      <Button
        variant="outlined"
        onClick={() => dispatch(setNewBookingStep(1))}
        sx={{ mr: 2 }}
      >
        Volver
      </Button>
      <Button variant="contained" onClick={submitBooking}>
        Confirmar
      </Button>
    </Box>
  );
}

NewBookingConfirmation.propTypes = {
  movieName: PropTypes.string.isRequired,
  screenings: PropTypes.arrayOf(PropTypes.object).isRequired,
};
