import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setFilterDate } from '../../../store/modules/movies/slice';

export default function MovieDateFilter() {
  const dispatch = useDispatch();
  return (
    <Grid item>
      <TextField
        name="startDate"
        label="Fecha"
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        onChange={(e) => dispatch(setFilterDate(e.target.value))}
        sx={{ my: 2 }}
      />
    </Grid>
  );
}
