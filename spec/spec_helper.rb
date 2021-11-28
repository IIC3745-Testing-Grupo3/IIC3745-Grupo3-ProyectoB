require 'capybara/rspec'
require_relative './support/movies_helper'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
  config.shared_context_metadata_behavior = :apply_to_host_groups
  config.include MoviesHelper, :type => :feature
end

Capybara.default_driver = ENV['SELENIUM_DRIVER'] ? ENV['SELENIUM_DRIVER'].to_sym : :selenium
