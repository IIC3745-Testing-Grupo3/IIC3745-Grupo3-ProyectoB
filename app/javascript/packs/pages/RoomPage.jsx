import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RoomPassage from '../components/room/RoomPassage';
import RoomScreen from '../components/room/RoomScreen';

const rowNames = ['A', 'B', 'C', 'D'];

const columns = Array.from({ length: 12 }, (_, i) => i + 1); // Cambiar

export default function RoomPage() {
  const [selectedSpots, setSelectedSpots] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    if (selectedSpots.length) {
      setSelectedRow(selectedSpots[0].row);
    } else {
      setSelectedRow(null);
    }
  }, [selectedSpots]);

  const rowAvailable = (row) => {
    return selectedRow ? row === selectedRow : true;
  };

  const isSelected = (row, column) => {
    return !!selectedSpots.find(
      (spot) => spot.row === row && spot.column === column,
    );
  };

  const addSpot = (row, column) => {
    if (isSelected(row, column)) {
      setSelectedSpots(
        selectedSpots.filter(
          (spot) => spot.row !== row || spot.column !== column,
        ),
      );
    } else {
      setSelectedSpots([...selectedSpots, { row, column }]);
    }
  };

  const spotSelectionHandler = (row, column) => {
    if (rowAvailable(row)) {
      addSpot(row, column);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: '#9dcee2',
          padding: '20px 10px',
        }}
      >
        <RoomPassage position="left" />
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="center"
          style={{ padding: '0px 30px 0 30px' }}
        >
          <Grid container item spacing={2}>
            {rowNames.map((x) => (
              <Grid container item spacing={1} key={x}>
                {columns.map((spot) => (
                  <Grid item xs={1} key={spot}>
                    <Paper
                      onClick={() => spotSelectionHandler(x, spot)}
                      sx={{
                        height: 1,
                        width: 1,
                        padding: 1,
                        bgcolor:
                          isSelected(x, spot) && rowAvailable(x)
                            ? 'primary.main'
                            : 'background.paper',
                        opacity: rowAvailable(x) ? '100%' : '40%',
                        cursor: rowAvailable(x) ? 'pointer' : 'not-allowed',
                      }}
                      style={{ textAlign: 'center' }}
                    >
                      <Typography variant="body2">{`${x}${spot}`}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
          <RoomScreen />
        </Grid>
        <RoomPassage position="right" />
      </Box>
    </Box>
  );
}
