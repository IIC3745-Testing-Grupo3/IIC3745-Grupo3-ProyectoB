import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../api/moviesApi';
import Loading from '../components/ui/Loading';
// import NewMovieConfirmation from '../components/movies/create/NewMovieConfirmation';
import NewBookingForm from '../components/bookings/create/NewBookingForm';
import NewBookingRoom from '../components/bookings/create/NewBookingRoom';
// import NewMovieScreenings from '../components/movies/create/NewMovieScreenings';
import NewBookingSteps from '../components/bookings/create/NewBookingSteps';
import { resetState } from '../store/modules/bookings/slice';

export default function NewBookingPage() {
  const { id } = useParams();
  const { data, isLoading } = id && useGetMovieByIdQuery(id);
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.bookings.newBookingStep);

  useEffect(() => {
    dispatch(resetState());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/" component={RouterLink}>
          Inicio
        </Link>
        <Typography color="text.primary">Nueva reserva</Typography>
      </Breadcrumbs>
      {/* <Box component="img" src={data.poster} sx={{ width: 0.5 }} /> */}
      <Typography variant="h4">Nueva Reserva para {data.name}</Typography>
      <Box sx={{ width: 0.5, my: 4 }}>
        <NewBookingSteps />
      </Box>
      {currentStep === 0 && (
        <NewBookingForm
          startDate={data.start_date}
          endDate={data.end_date}
          screenings={data.screenings}
        />
      )}
      {currentStep === 1 && <NewBookingRoom />}
      {/* {currentStep === 2 && <NewMovieConfirmation />} */}
    </>
  );
}
