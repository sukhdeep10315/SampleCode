export default (state = { product: null }, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...state, product: action.payload };
    case "CLEARPRODUCT":
      return { ...state, product: null };
    default:
      return state;
  }
};
