@users.each do |user|
  json.set! user.id.to_s do
    json.id user.id

  end
end
