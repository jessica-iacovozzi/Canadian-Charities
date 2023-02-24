Rails.application.routes.draw do
  get 'api/v1/charities', to: 'api/v1/charities#index'

  namespace :api do
    namespace :v1 do
      resources :charities, only: %i[index show]
    end
  end

  match '*path' => redirect('api/v1/charities'), via: :all
end
