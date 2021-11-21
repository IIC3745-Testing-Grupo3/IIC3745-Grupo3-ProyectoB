import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from 'react-redux';

const steps = [
  'Agregar información de la película',
  'Agregar funciones',
  'Confirmar película',
];

export default function NewMovieSteps() {
  const currentStep = useSelector((state) => state.movies.newMovieStep);
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
