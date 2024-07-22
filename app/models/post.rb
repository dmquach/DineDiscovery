require "open-uri"

class Post < ApplicationRecord
  validates :title, presence: true

end
