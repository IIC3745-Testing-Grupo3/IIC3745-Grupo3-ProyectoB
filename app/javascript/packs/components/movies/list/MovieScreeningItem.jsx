import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import _ from 'lodash';

export default function MovieScreeningItem({ screenings }) {
  return (
    <Grid container spacing={2}>
      {_.keys(screenings).map((schedule) => (
        <Grid item key={schedule}>
          <Typography gutterBottom>{schedule}</Typography>
          <Box>
            {screenings[schedule].map((screen) => (
              <Typography
                variant="body2"
                color="text.secondary"
                key={screen.id}
              >
                Sala {screen.room}
              </Typography>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

MovieScreeningItem.propTypes = {
  screenings: PropTypes.shape({
    Matiné: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        room: PropTypes.number,
      }),
    ),
    Tanda: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        room: PropTypes.number,
      }),
    ),
    Noche: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        room: PropTypes.number,
      }),
    ),
  }).isRequired,
};
