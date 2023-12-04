class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  before_action :require_logged_out, only: :create

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :info
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :info
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:email, :reviews, :password, :zip_code, :birthday, :first_name, :last_name, :avatar)
  end
end
