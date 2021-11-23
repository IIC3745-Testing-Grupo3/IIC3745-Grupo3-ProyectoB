Rails.application.routes.draw do
  resources :movies, only: [:create, :index]
  get '/', to: 'pages#index'
  get '/*path', to: 'pages#index'
end
