json.user do
  json.extract! @user, :id, :email, :username, :reviews :created_at, :updated_at
end
