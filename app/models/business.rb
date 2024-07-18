class Business < ApplicationRecord
  validates :name, presence: true
  validates :city, presence: true
  validates :state, presence: true, length: { is: 2 }
  validates :price_range, presence: true
  validates :category, presence: true

  belongs_to :owner,
             class_name: :User,
             foreign_key: :user_id

  has_many :reviews,
             class_name: :Review,
             foreign_key: :business_id,
             dependent: :destroy

  def update_average_rating
    reviewers_count = reviewers.count
    return update(rating: 0) if reviewers_count.zero?
    new_average = reviews.sum(:rating) / reviewers_count.to_f
    update(rating: new_average)
  end

end
