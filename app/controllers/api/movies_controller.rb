class Api::MoviesController < ApplicationController
  def create
    if (!movie_params[:screenings].empty?)
      movie = Movie.create(movie_params.slice(:name, :start_date, :end_date, :poster))
      movie.screenings << movie_params[:screenings].map { |screening| Screening.new(screening) }
      render json: { **movie.as_json, screenings: movie.screenings.as_json }
    else
      body = {:status => 400, :error => "Empty Screenings"}
      return render :json => body, :status => :bad_request
    end
  end

  def index
    if (params[:date])
      movies = Movie.includes(:screenings).where(
        "start_date <= '#{params[:date]}' and end_date >= '#{params[:date]}'"
      )
      render json: movies, :include => :screenings
    else
      movies = Movie.includes(:screenings).where('end_date >= ?', Date.today).all
      render json: movies, :include => :screenings
    end
  end

  def show
    movie = Movie.includes(:screenings).find_by(id: params[:id])
    render json: movie, :include => :screenings
  end

  private

  def movie_params
    params.require(:movie).permit(:name, :start_date, :end_date, :poster, screenings: [:schedule, :room])
  end
end
