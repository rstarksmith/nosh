Rails.application.routes.draw do
  
  resources :favorites, only: [:index, :create, :destroy]
  
  # resources :visits, except: [:index, :show] do
  #   resources :comments, only: [:index, :destroy]
  # end 

  resources :visits, only: [:create, :update, :destroy]
  resources :comments, only: [:index, :destroy]
  
  resources :trucks, only: [:index, :show]
  # get "/trucks/:town", to: "trucks#local"

  get "/noshboard", to: "visits#index"
  get "/auth", to: "users#show"
  get "profile", to: "users#profile"
  post "/signup", to: "users#create"
  delete "/closeaccount", to: "users#destroy"
  post "/signin", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
