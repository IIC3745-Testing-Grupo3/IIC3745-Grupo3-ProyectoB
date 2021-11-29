module BookingsHelper
  def select_movie_step
    fill_in('startDate', with: Date.today.advance(days: 11).to_s)
    click_button('Reservar Entradas')
  end

  def fill_first_booking_tab
    fill_in('booker', with: 'dhvasquez@uc.cl')
    fill_in('date', with: Date.today.advance(days: 11).to_s)
    find('#screening').click
    find('li', text: 'Matiné: Sala 1').click
    click_button('Siguiente')
  end
  
  def fill_second_booking_tab
    find('#A1').click
    find('#A3').click
    click_button('Siguiente')
  end
end
