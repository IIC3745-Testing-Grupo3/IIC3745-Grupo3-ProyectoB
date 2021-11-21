import baseApi from './baseApi';

const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createMovie: build.mutation({
      query: (body) => ({
        url: '/movies',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

// eslint-disable-next-line import/prefer-default-export
export const { useCreateMovieMutation } = moviesApi;
