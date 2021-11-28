class Api::ScreeningsController < ApplicationController
  def occupied
    if !params[:start_date] or !params[:end_date]
      return head :bad_request
    end
    screenings = Screening.includes(:movie).where(
      "movies.start_date <= '#{params[:end_date]}' and movies.end_date >= '#{params[:start_date]}'"
    ).references(:movies)
    grouped_screenings = screenings.group_by { |screening| screening[:schedule] }
    occupied_rooms = {
      Matiné: grouped_screenings['Matiné'] ? grouped_screenings['Matiné'].map { |screening| screening[:room] } : [],
      Tanda: grouped_screenings['Tanda'] ? grouped_screenings['Tanda'].map { |screening| screening[:room] } : [],
      Noche: grouped_screenings['Noche'] ? grouped_screenings['Noche'].map { |screening| screening[:room] } : [],
    }
    render json: occupied_rooms
  end

  def index
    screenings = Screening.where(movie_id: params[:movie_id]).all
    render json: screenings
  end
end
