import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        height: {
          xs: 'calc(100vh - 120px)',
          sm: 'calc(100vh - 128px)',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" component="h1" textAlign="center">
        ERROR
        <Box
          component="span"
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          404
        </Box>{' '}
      </Typography>
      <Typography variant="h5" textAlign="center">
        La página que estás buscando no existe
      </Typography>
      <Link to="/" component={RouterLink} sx={{ my: 2 }}>
        <Typography variant="h6">Volver al inicio</Typography>
      </Link>
    </Box>
  );
}
