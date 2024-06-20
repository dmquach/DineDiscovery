class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  wrap_parameters include: Review.attribute_names + [:images]

  def index
    @reviews = Review.includes(:user).all
  end

end
