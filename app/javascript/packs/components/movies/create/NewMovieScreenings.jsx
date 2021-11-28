import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../ui/Loading';
import {
  setNewMovieStep,
  setScreening,
} from '../../../store/modules/movies/slice';
import { useGetOccupiedRoomsQuery } from '../../../api/screeningsApi';

const schedules = ['Matiné', 'Tanda', 'Noche'];
const availableRooms = [1, 2, 3, 4, 5, 6, 7, 8];

export default function NewMovieScreenings() {
  const dispatch = useDispatch();
  const { newMovieData, newMovieScreenings } = useSelector(
    (state) => state.movies,
  );
  const { data, isLoading } = useGetOccupiedRoomsQuery({
    startDate: newMovieData.startDate,
    endDate: newMovieData.endDate,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {schedules.map((schedule) => (
        <Box key={schedule} sx={{ my: 3 }} id={schedule}>
          <Typography variant="h5">{schedule}</Typography>
          <ToggleButtonGroup
            value={newMovieScreenings[schedule]}
            onChange={(_e, rooms) =>
              dispatch(setScreening({ schedule, rooms }))
            }
          >
            {availableRooms
              .filter((room) => !data[schedule].includes(room))
              .map((room) => (
                <ToggleButton key={room} value={room}>
                  {`Sala ${room}`}
                </ToggleButton>
              ))}
          </ToggleButtonGroup>
        </Box>
      ))}
      <Button
        variant="outlined"
        onClick={() => dispatch(setNewMovieStep(0))}
        sx={{ mr: 2 }}
      >
        Volver
      </Button>
      <Button variant="contained" onClick={() => dispatch(setNewMovieStep(2))}>
        Siguiente
      </Button>
    </>
  );
}
