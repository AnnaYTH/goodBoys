Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] 
    # do 
    #   resources :reviews, only: [:index, :show, :create, :update, :destroy]
    # end
    
    resource :session, only: [:create, :destroy, :show]

    resources :relationships, only: [:show, :index] 
    # do 
    #   resources :reviews, only: [:index, :show]
    # end

    resources :reviews
  end

  # resource :relationships, only: [:show, :index] 

  root "static_pages#root"

end
