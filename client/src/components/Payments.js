import React, { Component } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { connect } from 'react-redux';
import CheckoutForm from "./CheckoutForm";
import * as actions from '../actions';

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class Payments extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center"}}>
        <h6 style={{ fontFamily: "'Sansita Swashed', cursive"}}>
          *You could add your credits with a fake card!
        </h6>

        <Elements 
          stripe={promise}
        >
          <CheckoutForm />
        </Elements>
      </div>
    );
  }
}

// export default Payments;
export default connect(null, actions)(Payments);