class ApplicationController < ActionController::Base
  private

    def current_user
      token = request.header['Authorization'].to_s
      email = Base64.decode64(token)
      User.find_by(email: email)
    end
end
