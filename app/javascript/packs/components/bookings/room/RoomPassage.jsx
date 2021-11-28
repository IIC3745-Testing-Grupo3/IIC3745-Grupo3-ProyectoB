import React from 'react';
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
    <Paper
      sx={{
        height: 1,
        width: 50,
        padding: 1,
        bgcolor: 'primary.dark',
      }}
    >
      <Typography
        variant="h6"
        style={{
          transform: `rotate(${rotationValue}deg)`,
          marginTop: `${marginTopValue}%`,
          color: 'white',
        }}
        align="center"
      >
        Pasillo
      </Typography>
    </Paper>
  );
}

RoomPassage.propTypes = {
  position: PropTypes.oneOf(['right', 'left']).isRequired,
};
