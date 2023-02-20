Rails.application.routes.draw do
  root 'api/v1/charities#index'

  namespace :api do
    namespace :v1 do
      resources :charities, only: %i[index show]
    end
  end
end
