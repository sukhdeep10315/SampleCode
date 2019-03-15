import {get} from './BaseApi';
import {URLList} from "../config/URLs";

export const getProducts = type => async dispatch => {
    
     dispatch({type:"ISLOADING"});
  let url = URLList.getProductsURL();
  if (type.subCategory) {
    if(type.subCategory==="All")
        {              
          if(type.category==="Home-Decor"){
            url=`${url}Home%20D%C3%A9cor`
          }else{
            url = `${url}${type.category}`;
          } 
        }
      else{    
        if(type.category==="Home-Decor"){
          url=`${url}Home%20D%C3%A9cor&category2=${type.subCategory}`
        }else{
          let encodedString = type.subCategory;
          if(type.subCategory.indexOf('&')  > -1){
            encodedString = type.subCategory.replace('&', '%26');
            console.log("encodedString ", encodedString);
          }
          url = `${url}${type.category}&category2=${encodedString}`;
        }
         
      }  
  } else {
    if(type.category==="Home-Decor"){
      url=`${url}Home%20D%C3%A9cor`
    }else{
      url = `${url}${type.category}`;
    }
    
  }
  const res = await get(url);
  if(res && res.data){
    dispatch({ type: "PRODUCTS", payload: res.data.products });
  }else {
    clearProducts();
  }
  
};

export const clearProducts=()=>({type:"CLEARPRODUCTS"})





