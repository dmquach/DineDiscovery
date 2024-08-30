@businesses.each do |business|
  json.set! business.id do
    json.id business.id
    json.name business.name
  end
end
