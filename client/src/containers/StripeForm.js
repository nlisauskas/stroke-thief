import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        name="Stroke Thief" // the pop-in header title
        description="Lifetime Access" // the pop-in header subtitle
        ComponentClass="div"
        amount={499} // cents
        currency="USD"
        stripeKey="pk_live_OrogvAWx8HdlqspDmGIUkA7W0062OkSbui"
        locale="en"
        //email="nick.lisauskas@gmail.com"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        zipCode={false}
        allowRememberMe // "Remember Me" option (default true)
        token={this.onToken} // submit callback
        opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
        >
        <button className="btn btn-primary">
          Gain Lifetime Access to Stroke Thief
        </button>
      </StripeCheckout>
    )
  }
}
