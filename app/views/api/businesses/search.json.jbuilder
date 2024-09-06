json.business do
  @businesses.each do |business|
    json.set! business.id do
      json.extract! business
    end
  end
end
