class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token, raise: false

  def create
    render json: {token: auth_token, id: auth_token.payload[:sub]} # this is the info you need to send to the front end.
  end

end
