export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "SEARCHRESULTS":
      return { ...state, searchProducts: {...action.payload} };
    case "CLEARSEARCH":return { ...state, searchProducts: {} };
    default:
      return state;
  }
};
