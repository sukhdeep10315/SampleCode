import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/Products";
import ProductsComponent from "../../components/Products";

const Products = ({ match, getProducts, products,clearProducts, isLoading }) => {
  useEffect(() => {
    getProducts(match.params);
    return ()=>{
      clearProducts()
    }
  }, [match.params.category, match.params.subCategory]);
  return (
    <div>
      <ProductsComponent products={products} isLoading={isLoading} />
    </div>
  );
};

export default connect(
({ products }) => ({ products: products.products, isLoading:products.isLoading }),
  actions
)(withRouter(Products));




