Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :charities, only: [:index, :show]
    end
  end
end
