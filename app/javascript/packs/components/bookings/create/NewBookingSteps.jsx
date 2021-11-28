import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from 'react-redux';

const steps = [
  'Seleccionar Fecha y Función',
  'Elegir Asientos',
  'Confirmar Reserva',
];

export default function NewBookingSteps() {
  const currentStep = useSelector((state) => state.bookings.newBookingStep);
  return (
    <Stepper activeStep={currentStep}>
      {steps.map((label) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
