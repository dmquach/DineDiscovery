class Api::SessionsController < ApplicationController
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
    if current_user
      logout!
      render json: { message: "success" }
    end
  end
end
