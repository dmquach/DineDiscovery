class Business < ApplicationRecord
  validates :name, presence: true

  belongs_to :owner,
             class_name: :User,
             foreign_key: :user_id

  def update_average_rating
    reviewers_count = reviewers.count
    update(rating: new_average)
  end

end
