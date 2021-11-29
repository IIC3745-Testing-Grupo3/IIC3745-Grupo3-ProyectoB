require 'rails_helper'
require 'date'

describe 'Check booked seat', type: :feature do
  before :each do
    movie = create(:movie, :eleven_days, name: 'Shrek')
    screening = create(:screening, :morning, movie: movie)
    create(:booking, screening: screening)
    create(:screening, :afternoon, movie: movie)
    create(:screening, :night, movie: movie)
    visit '/'
  end

  it "check if seat is used" do
    select_movie_step
    fill_first_booking_tab
    color = find('#A1').native.css_value('background-color')
    expect(color).to eq('rgb(198, 40, 40)')
  end
end
