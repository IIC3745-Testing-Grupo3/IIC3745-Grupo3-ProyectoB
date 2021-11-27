import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function RoomPassage({ position }) {
  let rotationValue = '-90';
  let marginTopValue = '350';
  if (position === 'right') {
    rotationValue = '90';
    marginTopValue = '270';
  }
  return (
    <Grid>
      <Paper
        sx={{ height: 1, width: 50, padding: 1 }}
        style={{
          backgroundColor: '#1368aa',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          style={{
            transform: `rotate(${rotationValue}deg)`,
            marginTop: `${marginTopValue}%`,
            color: 'white',
          }}
        >
          Pasillo
        </Typography>
      </Paper>
    </Grid>
  );
}

RoomPassage.propTypes = {
  position: PropTypes.string.isRequired,
};
