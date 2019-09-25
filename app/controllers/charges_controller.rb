require 'stripe'

class ChargesController < ApplicationController

def create

    Stripe.api_key = Rails.application.credentials.dig(:stripe_live)

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
