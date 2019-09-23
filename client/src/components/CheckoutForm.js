import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      email: 'nick.lisauskas@gmail.com' //update this to use props for current user's email
                  };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
  let {token} = await this.props.stripe.createToken({name: "Name"});
  let charge = {
    amount: 499,
    currency: 'USD',
    description: 'Lifetime Membership to Stroke Thief'
  }
  let response = await fetch("api/charge", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email: this.state.email,
      charge: charge,
      token: token.id
    })
  });

  if (response.ok) this.setState({complete: true});
}

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
