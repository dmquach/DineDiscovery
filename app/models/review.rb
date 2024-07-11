class Review < ApplicationRecord
  validates :body, presence: true
  validates :rating, presence: true

  belongs_to :business
  belongs_to :user
end
