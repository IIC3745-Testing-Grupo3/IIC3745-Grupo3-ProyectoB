import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  setNewBookingData,
  setNewBookingStep,
} from '../../../store/modules/bookings/slice';

export default function NewBookingForm({ startDate, endDate, screenings }) {
  const dispatch = useDispatch();
  const newBookingData = useSelector((state) => state.bookings.newBookingData);
  console.log(newBookingData);
  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .required('Requerido')
      .min(
        new Date(startDate),
        `La película está disponible desde ${startDate}`,
      )
      .max(
        new Date(Date.parse(endDate) + 86400000),
        `La película está disponible hasta ${endDate}`,
      ),
    screening: Yup.number().required('Requerido'),
  });
  return (
    <Formik
      initialValues={{
        date: newBookingData?.date || '',
        screening: newBookingData?.screening || '',
      }}
      validationSchema={validationSchema}
      onSubmit={(data) => {
        dispatch(setNewBookingData(data));
        dispatch(setNewBookingStep(1));
      }}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            name="date"
            label="Fecha de Reserva"
            type="date"
            variant="outlined"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            style={{ width: '100%' }}
            helperText={errors.date && touched.date ? errors.date : ''}
            error={errors.date && touched.date}
            InputLabelProps={{ shrink: true }}
            sx={{ my: 2 }}
          />
          <TextField
            name="screening"
            label="Función"
            select
            variant="outlined"
            value={values.screening}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            style={{ width: '100%' }}
            helperText={
              errors.screening && touched.screening ? errors.screening : ''
            }
            error={errors.screening && touched.screening}
            InputLabelProps={{ shrink: true }}
            sx={{ my: 2 }}
          >
            {screenings.map(({ id, schedule, room }) => (
              <MenuItem key={id} value={id}>
                {`${schedule}: Sala ${room}`}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" type="submit">
            Siguiente
          </Button>
        </Form>
      )}
    </Formik>
  );
}

NewBookingForm.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  screenings: PropTypes.arrayOf(PropTypes.object).isRequired,
};
