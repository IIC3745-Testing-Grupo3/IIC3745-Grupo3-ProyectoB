import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Container sx={{ pt: 4 }}>
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="h4">Películas</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" endIcon={<Add />}>
            Agregar película
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
    </Container>
  );
}
