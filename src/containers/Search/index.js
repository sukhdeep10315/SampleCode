import React from "react";
import SearchComponent from "../../components/Search";
import { connect } from "react-redux";

function Search({ searchResults }) {
  //console.log("searchResults : ", searchResults);
  let categoryDetails = searchResults? getCategory(searchResults.facets):"";
  let products = searchResults? searchResults.products: [];
  
  return <SearchComponent  searchResults={products} categoryDetails ={categoryDetails}/>;
}

function getCategory(categoryDetails){
  let formattedCategory = {};
  if(categoryDetails){
    let categoryInfo = categoryDetails.filter(item => (item.name === "Category" || item.name ==="Sub category"))
    categoryInfo.forEach(element => {
      if(element.name === "Category"){
        formattedCategory.category = Object.keys(element.buckets)[0];
      }
      if(element.name === "Sub category"){
        formattedCategory.subCategory = (Object.keys(element.buckets).length>1?"ALL":Object.keys(element.buckets)[0])
      }
    });
  }
  
  return formattedCategory;
}

export default connect(({ search }) => ({ searchResults: search.searchProducts }))(
  Search
);
