class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  wrap_parameters include: Review.attribute_names + [:images]

  def index
    @reviews = Review.includes(:user).all
    render :index
  end

  def create
    @review = Review.new
    @review.business_id = params[:review][:business_id]
    @review.user_id = params[:review][:user_id]
    @review.rating = params[:review][:rating]
    @review.body = params[:review][:body]
    if params[:review][:images].present?
      params[:review][:images].each do |image|
        @review.images.attach(io: image.tempfile, filename: image.original_filename)
      end
    end
  end

  def latest
    @reviews = Review.includes(:user, :business)
    render :latest
  end

end
