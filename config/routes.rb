Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :relationships, only: [:show, :index]
  end

  # resource :relationships, only: [:show, :index] 

  root "static_pages#root"

end
