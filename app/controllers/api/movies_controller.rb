class Api::MoviesController < ApplicationController
  def create
    movie = Movie.create(movie_params.slice(:name, :start_date, :end_date, :poster))
    movie.screenings << movie_params[:screenings].map { |screening| Screening.new(screening) }
    render json: { **movie.as_json, screenings: movie.screenings.as_json }
  end

  def index
    if (params[:date])
      movies = Movie.includes(:screenings).where(
        "start_date <= '#{params[:date]}' and end_date >= '#{params[:date]}'"
      )
      render json: movies, :include => :screenings
    else 
      movies = Movie.includes(:screenings)
      render json: movies, :include => :screenings
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:name, :start_date, :end_date, :poster, screenings: [:schedule, :room])
  end
end
