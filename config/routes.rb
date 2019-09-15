Rails.application.routes.draw do

  scope '/api' do
    post 'user_token' => 'user_token#create'
    get 'users/current' => 'users#current'
    resources :users do
      resources :rounds
      resources :courses
    end
    resources :rounds
    resources :courses
      get '*path', to: "application#fallback_index_html", constraints: ->(request) do
        !request.xhr? && request.format.html?
      end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end