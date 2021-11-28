FactoryBot.define do
  factory :screening do
    association :movie
    room { 1 }
  end

  trait :morning do
    schedule { 'Matiné' }
  end
  
  trait :afternoon do
    schedule { 'Tanda' }
  end

  trait :night do
    schedule { 'Noche' }
  end
end
