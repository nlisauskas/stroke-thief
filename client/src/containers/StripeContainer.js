import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';

class StripeContainer extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_A57nVD8fvlslgNLkUV7Egqb3001pLd5y5X">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default StripeContainer;
