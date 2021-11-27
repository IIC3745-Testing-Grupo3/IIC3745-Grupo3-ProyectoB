class Screening < ApplicationRecord
  belongs_to :movie
  has_many :bookings
end
