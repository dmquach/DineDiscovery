class ApplicationController < ActionController::API
    rescue_from StandardError, with: :unhandled_error
    rescue_from ActionController::InvalidAuthenticityToken,
    with: :invalid_authenticity_token
    include ActionController::RequestForgeryProtection

    # protect_from_forgery with: :exception
    before_action :attach_authenticity_token, :snake_case_params

    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
      session[:session_token] = user.reset_session_token!
      @current_user = user
    end

    def logout!
      current_user.reset_session_token! if current_user
      session[:session_token] = nil
      @current_user = nil
    end

    def require_logged_in
      unless current_user
        render json: { message: 'Unauthorized' }, status: :unauthorized
      end
    end

    def require_logged_out
      if logged_in?
        render json: { errors: ["Must be logged out"] }, status: 403
      end
    end

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
      headers['X-CSRF-Token'] = masked_authenticity_token(session)
    end
    
    def unhandled_error(error)
      if request.accepts.first.html?
        raise error
      else
        @message = "#{error.class} - #{error.message}"
        @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
        render "api/errors/internal_server_error", status: :internal_server_error

        logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
      end
    end
end
