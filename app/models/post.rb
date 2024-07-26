require "open-uri"

class Post < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo
  before_validation :generate_default_pic
  has_many_attached :images
  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors.add(:photo, "must be attached")
    end
  end

end
