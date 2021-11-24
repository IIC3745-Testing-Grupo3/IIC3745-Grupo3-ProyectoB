Rails.application.routes.draw do
  namespace :api do
    resources :movies, only: [:create, :index]
  end

  get '/', to: 'pages#index'
  get '/*path', to: 'pages#index'
end
