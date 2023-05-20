Rails.application.routes.draw do
  
  resources :visits, except: [:index, :show] do
    resources :comments, only: :create
  end 

  resources :comments, only: :destroy

  resources :favorites, only: [ :index, :create, :destroy]
  resources :trucks, only: [:index, :show]

  get "/noshboard", to: "visits#index"
  get "profile", to: "users#profile"
  get "/auth", to: "users#show"
  post "/signup", to: "users#create"
  patch "/users/:id", to: "users#update"
  delete "/closeaccount", to: "users#destroy"
  post "/signin", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/direct_uploads/presigned_url", to: "direct_uploads#presigned_url"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
