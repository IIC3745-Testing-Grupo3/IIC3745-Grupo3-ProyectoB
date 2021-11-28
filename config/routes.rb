Rails.application.routes.draw do
  namespace :api do
    resources :movies, only: [:create, :index, :show], shallow: true do
      resources :screenings, only: [:index], shallow: true do
        resources :bookings, only: [:create, :index]
      end
    end
    get '/screenings/occupied', to: 'screenings#occupied'
  end

  get '/', to: 'pages#index'
  get '/*path', to: 'pages#index'
end
