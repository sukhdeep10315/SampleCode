import {post} from './BaseApi';
import {URLList} from "../config/URLs";

export const login = details => dispatch => {
  let url = URLList.getLoginURL();
  return post(
    url,
    details
  ).then(res=> dispatch({ type: "LOGIN", payload: res.data }))
   .catch(err=> console.log("Login Error" , err))
  
};

export const logout = () => dispatch => {
  dispatch({ TYPE: "LOGIN" });
};
