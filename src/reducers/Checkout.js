export default (state = { checkoutData: {}, cartItems: {} }, action) => {
  switch (action.type) {
    case "CHECKOUT":
      return {
        ...state,
        checkoutData: { ...state.checkoutData, ...action.payload }
      };
    case "SET_CART_ITEMS_ON_CHECKOUT":
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};
