@reviews.each do |review|
  json.set! review.id.to_s do
    json.id review.id
    json.rating review.rating
    json.business_id review.business.id
    json.user_id review.user.id
    json.body review.body
    json.extract! review.user, :first_name, :last_name
    json.photo review.photo.url
  end
end
