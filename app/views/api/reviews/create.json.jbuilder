json.extract! @review, :body, :rating, :created_at, :id
json.user_id @review.user.id
json.extract! @review.user, :first_name, :last_name

json.imageUrls @review.images.map { |file| file.url }
