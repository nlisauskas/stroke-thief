import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';

class StripeContainer extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_live_OrogvAWx8HdlqspDmGIUkA7W0062OkSbui">
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
