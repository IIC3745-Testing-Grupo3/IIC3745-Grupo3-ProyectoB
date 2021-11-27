class Api::BookingsController < ApplicationController
  def create
    screening = Screening.includes(:bookings).find(params[:screening_id])
    data = booking_params.slice(:booker, :date, :row, :column)
    # Validate date
    if not DateTime.parse(data["date"]).between?(
      screening.movie.start_date, screening.movie.end_date
    )
      body = {:status => 400, :error => "Invalid date"}
      render :json => body.to_json, :status => :bad_request
      return
    end
    # No seat repeated
    screening.bookings.each do |booker|
      if booker.row == data["row"] \
        && booker.column == data["column"] \
        && booker.date == DateTime.parse(data["date"])
        body = {:status => 400, :error => "Seat already taken"}
        render :json => body.to_json, :status => :bad_request
        return
      end
    end
    booking = screening.bookings.create(data)
    render json: booking
  end

  def index
    bookings = Booking.where(screening_id: params[:screening_id]).all
    render json: bookings
  end

  private

  def booking_params
    params.require(:booking).permit(:booker, :date, :row, :column)
  end
end
