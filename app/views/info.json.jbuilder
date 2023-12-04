json.user do
  json.extract! @user, :email, :first_name, :last_name, :zip_code, :birthday,
end
