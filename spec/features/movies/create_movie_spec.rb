require 'rails_helper'

describe "Create movie", type: :feature do
  before :each do
    visit '/movies/new'
  end

  it "fills the first tab successfully" do
    visit '/movies/new'
    fill_in('name', with: 'Kimetsu no Yaiba: Mugen Train')
    fill_in('startDate', with: '2021-11-27')
    fill_in('endDate', with: '2021-11-28')
    fill_in('poster', with: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/demon-slayer-mugen-train-imax-4dx-poster.jpg?resize=1280%2C1829&quality=80&ssl=1')
    click_button('Siguiente')
    expect(page).to have_content 'Matiné'
  end

  it "fills the second tab successfully" do
    fill_first_tab
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
    expect(page).to have_content 'Confirmar película'
  end

  it "fills the second tab successfully" do
    fill_first_tab
    fill_second_tab
    click_button('Confirmar')
    expect(page).to have_content 'La película se ha agregado con éxito'
    click_button('Ir al inicio')
    expect(page).to have_content 'Kimetsu no Yaiba: Mugen Train'
  end
end
