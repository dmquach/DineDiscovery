json.set! @business.id.to_s do
  json.extract! @business, :name, :id, :city, :state, :zip_code, :phone_number, :price_range, :category, :rating, :lng, :lat
  json.photo @business.photo.url

  json.reviews @business.reviews.map { |review| review.id }
end
