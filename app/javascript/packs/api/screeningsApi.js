import baseApi from './baseApi';

const screeningsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: ({ body, screening }) => ({
        url: `/screenings/${screening}/bookings/multiple`,
        method: 'POST',
        body: { ...body },
      }),
    }),
    getOccupiedRooms: build.query({
      query: ({ startDate, endDate }) => ({
        url: '/screenings/occupied',
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      }),
    }),
    getOccupiedSpots: build.query({
      query: ({ date, screening }) => ({
        url: `/screenings/${screening}/bookings`,
        params: {
          date,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateBookingMutation,
  useGetOccupiedRoomsQuery,
  useGetOccupiedSpotsQuery,
} = screeningsApi;
