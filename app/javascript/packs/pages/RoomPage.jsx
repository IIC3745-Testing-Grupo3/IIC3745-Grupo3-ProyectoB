import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RoomPassage from '../components/room/RoomPassage';
import RoomScreen from '../components/room/RoomScreen';

export default function RoomPage() {
  const rowNames = ['a', 'b', 'c', 'd'];
  const chairsGrid = rowNames.map((rowName) => ({
    row: [...Array(12)].map((x, i) => `${rowName}${i + 1}`),
    value: rowName,
  }));
  return (
    <Box>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#9dcee2',
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
            {chairsGrid.map((x) => (
              <Grid container item spacing={1} key={x.value}>
                {x.row.map((y) => (
                  <Grid item xs={1} key={y}>
                    <Paper
                      sx={{ height: 1, width: 1, padding: 1 }}
                      style={{ textAlign: 'center' }}
                    >
                      <Typography variant="body2"> {y} </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
          <RoomScreen />
        </Grid>
        <RoomPassage position="right" />
      </div>
    </Box>
  );
}
