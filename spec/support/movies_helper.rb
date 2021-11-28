module MoviesHelper
  def fill_first_tab
    fill_in('name', with: 'Kimetsu no Yaiba: Mugen Train')
    fill_in('startDate', with: '2021-11-27')
    fill_in('endDate', with: '2021-11-28')
    fill_in('poster', with: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/demon-slayer-mugen-train-imax-4dx-poster.jpg?resize=1280%2C1829&quality=80&ssl=1')
    click_button('Siguiente')
  end
  
  def fill_second_tab
    within('#Matiné') do
      click_button('1')
      click_button('2')
      click_button('3')
      click_button('4')
      click_button('5')
    end
    within('#Tanda') do
      click_button('8')
    end
    click_button('Siguiente')
  end
end
