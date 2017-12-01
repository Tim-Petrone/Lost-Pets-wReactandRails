Rails.application.routes.draw do
  resources :pets
  get "pets/main" => 'pets#main'
  root to: 'pets#index'
end
