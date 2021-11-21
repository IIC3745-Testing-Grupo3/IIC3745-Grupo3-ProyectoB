import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { setNewMovieData } from '../../store/modules/movies/slice';

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
  poster: Yup.string().required('Requerido'),
});

export default function NewMovieForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', startDate: '', endDate: '', poster: '' }}
      validationSchema={validationSchema}
      onSubmit={(data) => dispatch(setNewMovieData(data))}
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
            margin="dense"
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
            margin="dense"
            InputLabelProps={{ shrink: true }}
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
            margin="dense"
            InputLabelProps={{ shrink: true }}
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
            margin="dense"
          />
          <Button variant="contained" type="submit">
            Siguiente
          </Button>
        </Form>
      )}
    </Formik>
  );
}
