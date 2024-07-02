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
    if @review.save
      @review.business.update_average_rating
      render :create
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def latest
    @reviews = Review.includes(:user, :business).order(created_at: :desc).limit(8)
    render :latest
  end

  def review_params
    params.require(:review).permit(:business_id, :user_id, :rating, :body, :photo, :images, :index)
  end

end
