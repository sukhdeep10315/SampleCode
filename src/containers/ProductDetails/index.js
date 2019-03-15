import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/ProductDetails";
import ProductDetailsPage from "../../components/ProductDetails";

const ProductDetails = ({ match, getProduct, product,clearProduct }) => {
  useEffect(() => {
    getProduct(match.params.item);
    return ()=>{
      clearProduct()
    }
  }, [match.params.item]);
  return (
    <div>
      <ProductDetailsPage product={product} />
    </div>
  );
};

export default connect(
  ({ product }) => ({ product: product.product }),
  actions
)(withRouter(ProductDetails));
