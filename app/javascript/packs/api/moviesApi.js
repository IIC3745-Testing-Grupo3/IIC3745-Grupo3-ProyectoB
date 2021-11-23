import baseApi from './baseApi';

const moviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createMovie: build.mutation({
      query: (body) => ({
        url: '/movies',
        method: 'POST',
        body: { movie: body },
      }),
    }),
    getMovies: build.query({
      query: () => '/movies',
    }),
  }),
  overrideExisting: false,
});

export const { useCreateMovieMutation, useGetMoviesQuery } = moviesApi;
