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
      query: (date) => ({
        url: '/movies',
        params: {
          date,
        },
      }),
    }),
    getMovieById: build.query({
      query: (id) => ({
        url: `/movies/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateMovieMutation,
  useGetMoviesQuery,
  useGetMovieByIdQuery,
} = moviesApi;
