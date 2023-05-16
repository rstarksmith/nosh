Rails.application.routes.draw do
  
  resources :visits, except: [:index, :show] do
    resources :comments, only: :create
  end 

  resources :comments, only: :destroy

  get "/noshboard", to: "visits#index"

  resources :favorites, only: [ :create, :destroy]
  resources :trucks, only: [:index, :show]

  get "profile", to: "users#profile"
  get "/auth", to: "users#show"
  post "/signup", to: "users#create"
  delete "/closeaccount", to: "users#destroy"
  post "/signin", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
