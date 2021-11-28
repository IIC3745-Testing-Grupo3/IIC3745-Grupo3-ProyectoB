FactoryBot.define do
  factory :movie do
    name { 'Dune' }
    poster { 'https://cdn.discordapp.com/attachments/889679620457259081/913629269672996914/Dune-367914309-large.png' }
    start_date { Date.today }
    end_date { Date.today.advance(days: 30) }
    created_at { DateTime.now }
    updated_at { DateTime.now }

    trait :today do
      start_date { Date.today }
    end

    trait :tomorrow do
      start_date { Date.today.advance(days: 1) }
    end

    trait :eleven_days do
      start_date { Date.today.advance(days: 11) }
    end
  end
end
