Rails.application.routes.draw do
  namespace :api do
    resources :movies, only: [:create, :index] do
      resources :screenings, only: [:index]
    end
    get '/screenings/occupied', to: 'screenings#occupied'
    resources :screenings do
      resources :bookings, only: [:create, :index]
    end
  end

  get '/', to: 'pages#index'
  get '/*path', to: 'pages#index'
end
