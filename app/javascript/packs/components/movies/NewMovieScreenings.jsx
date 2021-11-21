import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNewMovieStep,
  setScreening,
} from '../../store/modules/movies/slice';

const schedules = ['Matiné', 'Tanda', 'Noche'];
const availableRooms = [1, 2, 3, 4, 5, 6, 7, 8];

export default function NewMovieScreenings() {
  const dispatch = useDispatch();
  const newMovieScreenings = useSelector(
    (state) => state.movies.newMovieScreenings,
  );

  useEffect(() => {
    schedules.forEach((schedule) => {
      dispatch(setScreening({ schedule, rooms: [] }));
    });
  }, []);

  return (
    <>
      {schedules.map((schedule) => (
        <Box key={schedule} sx={{ my: 3 }}>
          <Typography variant="h5">{schedule}</Typography>
          <ToggleButtonGroup
            value={newMovieScreenings[schedule]}
            onChange={(_e, rooms) =>
              dispatch(setScreening({ schedule, rooms }))
            }
          >
            {availableRooms.map((room) => (
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
