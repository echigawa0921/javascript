Rails.application.routes.draw do
  get 'purlldownapp/index'
  root to: "purlldownapp#index"
end
