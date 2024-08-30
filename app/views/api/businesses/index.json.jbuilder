@businesses.each do |business|
  json.set! business.id do
    json.id business.id
    json.name business.name
    json.city business.city
    json.state business.state
  end
end
