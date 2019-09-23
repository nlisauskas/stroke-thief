require 'stripe'

class ChargesController < ApplicationController

def create

    Stripe.api_key = 'sk_test_xX7MGfNDLzeJfBSlLCm4AIkk00pIeM2jEn'

    begin

      customer = Stripe::Customer.create(
        :email => params[:email],
        :source => params[:token]
      )

      charge = Stripe::Charge.create(
        :customer => customer.id,
        :amount => params[:charge][:amount],
        :description => params[:charge][:description],
        :currency => params[:charge][:currency]
        )

      rescue Stripe::CardError => e
        render json: {message: e}, status: :not_acceptable
      end
    end

end
