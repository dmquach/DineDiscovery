class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: :destroy
  before_action :require_logged_out, only: :create

  def show
    if current_user
      @user = current_user
      render "api/users/profile"
    else
      render json: { user: nil }
    end
  end

  def create
    credential = params[:credential]
    password = params[:password]
    @user = User.find_by_credentials(credential, password)
    if @user
      login!(@user)
      render 'api/users/profile'
    else
      render json: { errors: ['Invalid credentials'] }, status: 401
    end
  end

  def destroy
    logout!
    head :no_content
  end
end
