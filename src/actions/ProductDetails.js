import { get } from './BaseApi';
import {URLList} from "../config/URLs";

export const getProduct = item => async dispatch => {
  let url = URLList.getProductDetailsURL() + item;
  const res = await get(url);
  if (res && res.data) {
    dispatch({ type: "PRODUCT", payload: res.data });
  } else {
    clearProduct();
  }

};

export const clearProduct = () => ({ type: "CLEARPRODUCT" })
