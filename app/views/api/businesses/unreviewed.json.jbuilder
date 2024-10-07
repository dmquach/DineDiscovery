@businesses.each do |business|
  json.set! business.id.to_s do
    json.id business.id
    json.name business.name
    json.city business.city
  end
end
