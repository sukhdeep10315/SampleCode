export default (
  state = {
    showHeader: true,
    showFooter: true,
    showNavbar: true,
    isLoading: false,
    cartItems: [],
    userDetails:{}
  },
  action
) => {
  switch (action.type) {
    case "SET_HEADER_STATUS":
      return { ...state, showHeader: action.payload };
    case "SET_FOOTER_STATUS":
      return { ...state, showFooter: action.payload };
    case "SET_NAVBAR_STATUS":
      return { ...state, showNavbar: action.payload };
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.payload };

    // case "ISLOADING":
    //   return { ...state, isLoading: true };
    // case "CLEAR_LOADING":
    //   return { ...state, isLoading: false }

    default:
      return state;
  }
};
