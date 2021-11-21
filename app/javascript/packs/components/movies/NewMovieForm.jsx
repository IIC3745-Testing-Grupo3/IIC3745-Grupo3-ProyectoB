import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  setNewMovieData,
  setNewMovieStep,
} from '../../store/modules/movies/slice';

const yesterday = new Date(Date.now() - 86400000);

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  startDate: Yup.date()
    .required('Requerido')
    .min(yesterday, 'La fecha no puede ser en el pasado'),
  endDate: Yup.date()
    .required('Requerido')
    .min(yesterday, 'La fecha no puede ser en el pasado')
    .when(
      'startDate',
      (startDate, yup) =>
        startDate &&
        yup.min(
          startDate,
          'La fecha de termino no puede ser menor a la fecha de inicio',
        ),
    ),
  poster: Yup.string()
    .url('El poster debe ser una URL válida')
    .required('Requerido'),
});

export default function NewMovieForm() {
  const dispatch = useDispatch();
  const newMovieData = useSelector((state) => state.movies.newMovieData);

  return (
    <Formik
      initialValues={{
        name: newMovieData?.name || '',
        startDate: newMovieData?.startDate || '',
        endDate: newMovieData?.endDate || '',
        poster: newMovieData?.poster || '',
      }}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        dispatch(setNewMovieData(data));
        dispatch(setNewMovieStep(1));
      }}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            name="name"
            label="Nombre"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            autoComplete="off"
            style={{ width: '100%' }}
            helperText={errors.name && touched.name ? errors.name : ''}
            error={errors.name && touched.name}
            sx={{ my: 2 }}
          />
          <TextField
            name="startDate"
            label="Fecha de inicio"
            type="date"
            variant="outlined"
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            style={{ width: '100%' }}
            helperText={
              errors.startDate && touched.startDate ? errors.startDate : ''
            }
            error={errors.startDate && touched.startDate}
            InputLabelProps={{ shrink: true }}
            sx={{ my: 2 }}
          />
          <TextField
            name="endDate"
            label="Fecha de término"
            type="date"
            variant="outlined"
            value={values.endDate}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            style={{ width: '100%' }}
            helperText={errors.endDate && touched.endDate ? errors.endDate : ''}
            error={errors.endDate && touched.endDate}
            InputLabelProps={{ shrink: true }}
            sx={{ my: 2 }}
          />
          <TextField
            name="poster"
            label="Poster"
            variant="outlined"
            value={values.poster}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            style={{ width: '100%' }}
            helperText={errors.poster && touched.poster ? errors.poster : ''}
            error={errors.poster && touched.poster}
            sx={{ my: 2 }}
          />
          <Button variant="contained" type="submit">
            Siguiente
          </Button>
        </Form>
      )}
    </Formik>
  );
}
