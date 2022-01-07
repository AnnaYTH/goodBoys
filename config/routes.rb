Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :relationships, only: [:show, :index]
  end

  # resource :relationships, only: [:show, :index] 

  root "static_pages#root"

end
