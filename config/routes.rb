Rails.application.routes.draw do
  resources :media, only: [:index]
end
