import baseApi from './baseApi';

const screeningsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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

// eslint-disable-next-line import/prefer-default-export
export const { useGetOccupiedRoomsQuery, useGetOccupiedSpotsQuery } =
  screeningsApi;
