import React, { useEffect } from "react";
import { connect } from "react-redux";
import CheckoutPage from "../../components/Checkout";
import {setHeaderStatus, setFooterStatus} from "../../actions/Header";
import { checkout } from "../../actions/Checkout";

const Checkout = ({ setHeaderStatus, setFooterStatus, checkout,cartItems }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <CheckoutPage checkout={checkout} cartItems= {cartItems} />;
};

export default connect(
  ({ checkout }) => ({ cartItems: checkout.cartItems }),
  {checkout,setHeaderStatus, setFooterStatus}
)(Checkout);
