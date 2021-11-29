require 'rails_helper'
require 'date'

describe 'Create booking', type: :feature do
  before :each do
    movie = create(:movie, :eleven_days, name: 'Shrek')
    create(:screening, :morning, movie: movie)
    create(:screening, :afternoon, movie: movie)
    create(:screening, :night, movie: movie)
    visit '/'
  end

  it "select the reservation button succesfully" do
    visit '/'
    fill_in('startDate', with: Date.today.advance(days: 11).to_s)
    click_button('Reservar Entradas')
    expect(page).to have_content 'Nueva Reserva para Shrek'
  end

  it "fills the first tab successfully" do
    select_movie_step
    fill_in('booker', with: 'dhvasquez@uc.cl')
    fill_in('date', with: Date.today.advance(days: 11).to_s)
    find('#screening').click
    find('li', text: 'Matiné: Sala 1').click
    click_button('Siguiente')
    expect(page).to have_content 'PANTALLA'
  end

  it "fills the second tab successfully" do
    select_movie_step
    fill_first_booking_tab
    find('#A1').click
    find('#A3').click
    click_button('Siguiente')
    expect(page).to have_content 'Confirmar reserva'
  end

  it "fills the third tab successfully" do
    select_movie_step
    fill_first_booking_tab
    fill_second_booking_tab
    click_button('Confirmar')
    expect(page).to have_content 'La reserva se ha realizado con éxito'
    click_button('Ir al inicio')
    expect(page).to have_content 'Shrek'
  end
end

