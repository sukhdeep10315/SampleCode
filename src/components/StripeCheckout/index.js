import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import STRIPE_PUBLISHABLE from "../../config/stripe";
import PAYMENT_SERVER_URL from "../../config/server";

const styles = theme => ({
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    }
  },
  yourOrdTxt: {
    fontSize: "11px",
    padding: "0px 15px 0px 15px"
  }
});

const CURRENCY = "USD";

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  console.info("Payment Successful", data);
  alert("Continue from here to order complete flow");
};

const errorPayment = data => {
  console.error("Payment Error", data);
};
axios.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log("Received Response:", response);
  return response;
});

const onToken = (amount, description) => token =>
  axios
    .post(
      PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount)
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(successPayment)
    .catch(errorPayment);

const Checkout = props => {
  const { classes, name, description, amount, cartItems } = props;
  return (
    <div>
      <StripeCheckout
        name={name}
        description={description}
        amount={fromDollarToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
        image="/assets/images/logo.png"
        shippingAddress
        billingAddress
        allowRememberMe={false}
      >
        <div className={classes.yourOrdTxt}>
          <Button className={classes.btnStyle}
                  disabled={!cartItems.orderItems?true:false}
          >
            <strong>Checkout with Stripe</strong>
          </Button>
        </div>
      </StripeCheckout>
    </div>
  );
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
