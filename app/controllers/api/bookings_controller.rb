class Api::BookingsController < ApplicationController
  def create
    screening = Screening.find(params[:screening_id])
    # Validate date
    if not DateTime.parse(params[:date]).between?(
      screening.movie.start_date, screening.movie.end_date
    )
      body = {:status => 400, :error => "Invalid date"}
      return render :json => body, :status => :bad_request
    end
    # No seat repeated
    booking = Booking.find_by(
      screening: screening, row: params[:row], column: params[:column],
      date: DateTime.parse(params[:date])
    )
    if booking
      body = {:status => 400, :error => "Seat already taken"}
      return render :json => body, :status => :bad_request
    end
    booking = screening.bookings.create(booking_params)
    render json: booking
  end

  def index
    date = DateTime.parse request.query_parameters["date"] rescue nil
    if not date
      body = {:status => 400, :error => "invalid or missing date"}
      return render :json => body, :status => :bad_request
    end
    bookings = Booking.where(
      screening_id: params[:screening_id],
      date: DateTime.parse(request.query_parameters["date"])
    ).all
    render json: bookings
  end
  
  def multiple_create
    screening = Screening.find(params[:screening_id])
    # Validate date
    if not DateTime.parse(params[:date]).between?(
      screening.movie.start_date, screening.movie.end_date
    )
      body = {:status => 400, :error => "Invalid date"}
      return render :json => body, :status => :bad_request
    end

    # No seats repeated
    params[:seats].each do |book|
      booking = Booking.find_by(
        screening: screening, row: book[:row], column: book[:column],
        date: DateTime.parse(params[:date])
      )
      if booking
        body = {:status => 400, :error => "Some seats are already taken"}
        return render :json => body, :status => :bad_request
      end
    end

    # Save bookings
    bookings = []
    params[:seats].each do |book|
      booking = Booking.find_by(
        screening: screening, row: book[:row], column: book[:column],
        date: DateTime.parse(params[:date])
      )
      booking = screening.bookings.create(
        :booker => params[:booker],
        :date => params[:date],
        :row => book[:row],
        :column => book[:column]
      )
      bookings << booking
    end
    render json: bookings
  end

  private

  def booking_params
    params.require(:booking).permit(:booker, :date, :row, :column)
  end
end
