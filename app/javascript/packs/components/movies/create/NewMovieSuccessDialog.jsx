import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function NewMovieSuccessDialog({ open }) {
  const navigate = useNavigate();

  return (
    <Dialog open={open}>
      <DialogTitle>Genial!!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          La película se ha agregado con éxito
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => navigate('/')}>Ir al inicio</Button>
      </DialogActions>
    </Dialog>
  );
}

NewMovieSuccessDialog.propTypes = {
  open: PropTypes.bool,
};

NewMovieSuccessDialog.defaultProps = {
  open: false,
};
