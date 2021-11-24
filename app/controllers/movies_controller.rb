class MoviesController < ApplicationController
  def create
    movie = Movie.create(movie_params.slice(:name, :start_date, :end_date, :poster))
    movie.screenings << movie_params[:screenings].map { |screening| Screening.new(screening) }
    render json: { **movie.as_json, screenings: movie.screenings.as_json }
  end

  def index
    movies = Movie.includes(:screenings)
    render json: movies, :include => :screenings
  end

  private

  def movie_params
    params.require(:movie).permit(:name, :start_date, :end_date, :poster, screenings: [:schedule, :room])
  end
end
