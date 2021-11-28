require 'rails_helper'
require 'date'

describe "Check list of movies", type: :feature do
  before :each do
    create(:movie, :today, name: "Dune")
    create(:movie, :tomorrow, name: "Once uppon a time in hollywood")
    visit '/'
  end

  it "found the movie" do
    visit '/'
    expect(page).to have_content "Dune"
    expect(page).to have_content 'Once uppon a time in hollywood'
  end

  it "apply filter and found one movie" do
    visit '/'
    fill_in('startDate', with: Date.today.to_s)
    expect(page).to have_content "Dune"
    expect(page).not_to have_content 'Once uppon a time in hollywood'
  end
end
