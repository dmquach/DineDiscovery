json.set! @business.id.to_s do
  json.extract! @business, :name, :id, :city, :state, :zip_code, :phone_number, :price_range, :category, :rating, :lng, :lat

end
