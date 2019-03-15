export default (state = { cartItems: {} }, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "ADDTOCART":
      return {
        ...state,
        cartItems: { ...state.cartItems, ...action.payload },
        isLoading: false
      };
    case "UPDATECART":
      return {
        ...state,
        cartItems: { ...state.cartItems, ...action.payload },
        isLoading: false
      };
    case "REMOVEITEMS":
      return {
        ...state,
        cartItems: { ...state.cartItems, ...action.payload },
        isLoading: false
      };
    case "GETCART":
      return {
        ...state,
        cartItems: { ...state.cartItems, ...action.payload },
        isLoading: false
      };
    default:
      return state;
  }
};
