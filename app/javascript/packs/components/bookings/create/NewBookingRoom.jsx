import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../ui/Loading';
import RoomPassage from '../room/RoomPassage';
import RoomScreen from '../room/RoomScreen';
import {
  setNewBookingStep,
  setSelectedRow,
  setSelectedSpots,
  resetSpots,
} from '../../../store/modules/bookings/slice';
import { useGetOccupiedSpotsQuery } from '../../../api/screeningsApi';

const rows = ['A', 'B', 'C', 'D'];

const columns = Array.from({ length: 12 }, (_, i) => i + 1);

export default function NewBookingRoom() {
  const [occupiedSpots, setOccupiedSpots] = useState([]);

  const { selectedSpots, selectedRow } = useSelector(
    (state) => state.bookings.roomData,
  );

  const { date, screening } = useSelector(
    (state) => state.bookings.newBookingData,
  );

  const { data, isLoading } =
    date && useGetOccupiedSpotsQuery({ date, screening });

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSpots.length) {
      dispatch(setSelectedRow(selectedSpots[0].row));
    } else {
      dispatch(setSelectedRow(null));
    }
  }, [selectedSpots]);

  useEffect(() => {
    if (data) {
      setOccupiedSpots([
        ...data.map(({ row, column }) => ({
          row,
          column,
        })),
      ]);
    }
  }, [data]);

  useEffect(() => {
    dispatch(resetSpots());
  }, []);

  const isRowAvailable = (row) => {
    return selectedRow ? row === selectedRow : true;
  };

  const isSelected = (row, column) => {
    return !!selectedSpots.find(
      (spot) => spot.row === row && spot.column === column,
    );
  };

  const isOccupied = (row, column) => {
    return !!occupiedSpots.find(
      (spot) => spot.row === row && spot.column === column,
    );
  };

  const addSpot = (row, column) => {
    if (isSelected(row, column)) {
      dispatch(
        setSelectedSpots(
          selectedSpots.filter(
            (spot) => spot.row !== row || spot.column !== column,
          ),
        ),
      );
    } else if (!isOccupied(row, column)) {
      dispatch(setSelectedSpots([...selectedSpots, { row, column }]));
    }
  };

  const spotSelectionHandler = (row, column) => {
    if (isRowAvailable(row)) {
      addSpot(row, column);
    }
  };

  const getSpotColor = (row, column) => {
    if (isOccupied(row, column)) {
      return 'error.dark';
    }
    if (isSelected(row, column) && isRowAvailable(row)) {
      return 'primary.main';
    }
    return 'background.paper';
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: '#9dcee2',
          padding: '20px 10px',
        }}
      >
        <Grid>
          <RoomPassage position="left" />
        </Grid>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          style={{ padding: '0px 30px 0 30px' }}
        >
          <Grid container item spacing={2}>
            {rows.map((row) => (
              <Grid container item spacing={1} key={row}>
                {columns.map((column) => (
                  <Grid item xs={1} key={column}>
                    <Paper
                      onClick={() => spotSelectionHandler(row, column)}
                      sx={{
                        height: 1,
                        width: 1,
                        padding: 1,
                        bgcolor: getSpotColor(row, column),
                        opacity: isRowAvailable(row) ? '100%' : '40%',
                        cursor:
                          isRowAvailable(row) && !isOccupied(row, column)
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                      style={{ textAlign: 'center' }}
                    >
                      <Typography variant="body2">{`${row}${column}`}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <RoomScreen />
          </Grid>
        </Grid>
        <Grid>
          <RoomPassage position="right" />
        </Grid>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          onClick={() => dispatch(setNewBookingStep(0))}
          sx={{ mr: 2 }}
        >
          Volver
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(setNewBookingStep(2))}
          disabled={!selectedRow}
        >
          Siguiente
        </Button>
      </Box>
    </>
  );
}
