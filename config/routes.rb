Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/*path', to: 'pages#index'
end
