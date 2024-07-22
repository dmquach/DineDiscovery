class Review < ApplicationRecord
  validates :body, presence: true
  validates :rating, presence: true

  belongs_to :business
  belongs_to :user

  has_one_attached :photo
  has_many_attached :images
  
  private

  def update_average_rating
    business.update_average_rating
  end
end
