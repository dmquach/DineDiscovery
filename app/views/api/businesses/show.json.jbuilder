json.business do
  @businesses.each do |business|
    json.set! business.id do
      json.extract! business, :id, :name, :city, :state, :zip_code, :phone_number, :price_range, :category, :rating, :lng, :lat
      json.photo business.photo.url
      json.reviews business.reviews.map { |review| review.id }
    end
  end
end

json.reviews do
  @business.reviews.each do |review|
    json.extract! review, :body, :rating, :created_at, :id
    json.set! review.id.to_s do
      json.user_id review.user.id
      json.extract! review, :id, :body, :rating
      json.imageUrls review.images.map { |file| file.url }
      if review.user.avatar.present?
        json.avatar_url review.user.avatar.url
      else
        json.avatar_url nil
      end
    end
  end
end
