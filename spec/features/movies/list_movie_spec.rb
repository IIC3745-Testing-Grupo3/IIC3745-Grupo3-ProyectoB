require 'rails_helper'
require 'date'

describe 'Check list of movies', type: :feature do
  before :each do
    create(:movie, :today)
    create(:movie, :tomorrow, name: 'Once uppon a time in hollywood')
    movie = create(:movie, :tendays, name: 'Shrek')
    create(:screening, :morning, movie: movie)
    create(:screening, :afternoon, movie: movie)
    create(:screening, :night, movie: movie)
    visit '/'
  end

  it 'found the movie' do
    visit '/'
    expect(page).to have_content 'Dune'
    expect(page).to have_content 'Once uppon a time in hollywood'
  end

  it 'apply filter and found one movie' do
    visit '/'
    fill_in('startDate', with: Date.today.to_s)
    expect(page).to have_content 'Dune'
    expect(page).not_to have_content 'Once uppon a time in hollywood'
  end

  it 'apply filter and found screening' do
    visit '/'
    fill_in('startDate', with: Date.today.advance(days: 11).to_s)
    expect(page).to have_content 'Shrek'
    expect(page).to have_content 'Matiné'
    expect(page).to have_content 'Tanda'
    expect(page).to have_content 'Noche'
    expect(page).to have_content 'Sala 1'
  end
end
