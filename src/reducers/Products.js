
export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "ISLOADING":
    return{...state, isLoading:true}
    case "PRODUCTS":
      return { ...state, products: [...action.payload], isLoading:false };
      case "CLEARPRODUCTS": 
          return {...state, products:[], isLoading:false}
    default:
      return state;
  }
};
