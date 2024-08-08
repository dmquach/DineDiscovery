@reviews.each do |review|
  json.set! review.id.to_s do
    json.id review.id
    json.rating review.rating
    json.business_id review.business.id
  end
end
