Rails.application.routes.draw do
  resources :pets
  get "pets/new" => 'pets#new'
  root to: 'pets#index'
end
