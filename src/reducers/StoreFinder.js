export default (state = { storeList: [] }, action) => {
  switch (action.type) {
    case "FINDSTORES":
      return {
        ...state,
        storeList: [...action.payload]
      };
    default:
      return state;
  }
};
