class User < ApplicationRecord
    has_secure_password

    validates :email,
      uniqueness: true,
      length: { in: 3..100 },
      format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :first_name, presence: true, length: { in: 2..40 }
    validates :last_name, presence: true, length: { in: 2..40 }

    validates :zip_code, presence: true, format: { with: /\A\d{5}\z/, message: "should be in the format 12345" }

    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..40 }, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(credential, password)
      field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
      user = User.find_by(field => credential)
      user&.authenticate(password)
    end

    def reset_session_token!
      self.update!(session_token: generate_unique_session_token)
      self.session_token
    end

    private

    def generate_unique_session_token
      loop do
        token = SecureRandom.base64
        break token unless User.exists?(session_token: token)
      end
    end

    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end
end
