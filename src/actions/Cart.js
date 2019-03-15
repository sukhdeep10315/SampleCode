import { post, deleteCall, get } from './BaseApi';
import {URLList} from "../config/URLs";

export const addToCart = addToCartRequest => dispatch => {
  dispatch({type:"ISLOADING"});
  let url =  URLList.getAddToCartURL();
  return post(url, addToCartRequest)
    .then(res => dispatch({ type: "ADDTOCART", payload: res.data }))
    .catch(err => console.log("Error from addToCart", err))

};


export const updateCart = quantityUpdate => dispatch => {
  let url =  URLList.getUpdateCartURL();
  return post(url, quantityUpdate)
    .then(res => dispatch({ type: "UPDATECART", payload: res.data }))
    .catch(err => err)
};

export const removeItemsFromCart = itemId => dispatch => {
  let url =  URLList.getDeleteCartURL()+itemId;
  return deleteCall(url)
    .then(res => dispatch({ type: "REMOVEITEMS", payload: res.data }))
    .catch(err => err)
};

export const getCart = cartData => dispatch => {
  let url =  URLList.getCart()+ cartData.memberId;
  return get(url)
    .then(res => dispatch({ type: "GETCART", payload: res.data }))
    .catch(err => err);
}




