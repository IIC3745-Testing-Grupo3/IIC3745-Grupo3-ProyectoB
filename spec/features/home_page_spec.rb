require 'rails_helper'

describe "Home page", type: :feature do
  it "loads correctly" do
    visit '/'
    expect(page).to have_content 'Home Page'
  end
end
