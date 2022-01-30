Rails.application.routes.draw do
  scope :api do
    resources :favorites
    resources :songs
    resources :users, only: [:show]

    post "/login", to: "sessions#create"
    post "/logout", to: "sessions#destroy"

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
