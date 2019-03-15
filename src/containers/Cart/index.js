import React, { useEffect } from "react";
import CartComponent from "../../components/Cart";
import { connect } from "react-redux";
import {
  setHeaderStatus,
  setFooterStatus,
  setNavBarStatus,
  setCartItemsOnHeader
} from "../../actions/Header";
import {setCartItemsOnCheckout} from "../../actions/Checkout"
import { updateCart, removeItemsFromCart, getCart } from "../../actions/Cart";

const Cart = ({
  setHeaderStatus,
  setFooterStatus,
  setNavBarStatus,
  setCartItemsOnHeader,
  setCartItemsOnCheckout,
  cartItems,
  updateCart,
  removeItemsFromCart,
  getCart,
  isLoading
}) => {
  useEffect(() => {
    setCartItemsOnHeader(cartItems.orderItems);
    setCartItemsOnCheckout(cartItems)
    setHeaderStatus(true);
    setFooterStatus(true);
    setNavBarStatus(false);
    //console.log("from Cart", userDetails);
    return () => {
      setNavBarStatus(true);
    };
  }, [cartItems.orderItems]);
  return (
    
    <div>
      <CartComponent
        cartItems={cartItems}
        updateCart={updateCart}
        removeItemsFromCart={removeItemsFromCart}
        getCart={getCart}
        isLoading={isLoading}
      />
    </div>
  );
};

export default connect(
  ({ cart }) => ({ cartItems: cart.cartItems, isLoading: cart.isLoading }),
  {
    setHeaderStatus,
    setFooterStatus,
    setNavBarStatus,
    setCartItemsOnHeader,
    setCartItemsOnCheckout,
    updateCart,
    removeItemsFromCart,
    getCart
  }
)(Cart);
