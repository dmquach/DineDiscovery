json.business do
  @businesses.each do |business|
    json.set! business.id do
      json.extract! business, :id, :name, :city, :state, :zip_code, :phone_number, :price_range, :category, :rating, :lng, :lat
      json.photo business.photo.url
    end
  end
end
