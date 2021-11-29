FactoryBot.define do
  factory :booking do
    association :screening
    booker { 'random_email@uc.cl' }
    date { DateTime.parse(Date.today.to_s).advance(days: 11) }
    row { 'A' }
    column { 1 }
  end
end
