import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function RoomScreen() {
  return (
    <Grid container item>
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h6"
          style={{ color: 'white', backgroundColor: '#ef3c2d' }}
        >
          PANTALLA
        </Typography>
      </Grid>
    </Grid>
  );
}
