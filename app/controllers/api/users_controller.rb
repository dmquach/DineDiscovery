class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ["password"] + [:avatar]

  def create
    @user = User.new(user_params)
    @user.first_name = params[:user][:first_name].capitalize()
    @user.last_name = params[:user][:last_name].capitalize()
    @user.zip_code = params[:user][:zip_code]
    if params[:user][:avatar].present?
      image = params[:user][:avatar]
      @user.avatar.attach(io: image.tempfile, filename: image.original_filename)
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
