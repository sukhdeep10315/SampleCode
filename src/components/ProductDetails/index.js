import React from "react";
import { Grid, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { withStyles } from "@material-ui/core/styles";
// import ReactImageZoom from "react-image-zoom";
import ExanpsionPanel from "../helpers/ExpansionPanel";
import { connect } from "react-redux";
import { addToCart } from "../../actions/Cart";
import Spinner from "../helpers/Spinner";
import { Markup } from 'interweave';
import "./index.css";

const styles = theme => ({
  productid: {
    fontSize: "12px",
    paddingLeft: "5px",
    color: "#333",
    verticalAlign: "middle"
  },
  addToCart: {
    textTransform: "uppercase",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#202121",
    border: "1px solid #202121",
    fontWeight: "500",
    fill: "#000",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#0084CD",
      fill: "#fff",
      border: "1px solid #fff"
    }
  },
  producttitle: {
    padding: "0 10% 0 0",
    fontWeight: "400",
    color: "cornflowerblue"
  },
  Spinner: {
    textAlign: "center",
    marginTop: "200px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",

    }
  }
});


const ProductDetailComponent = props => {
  const { classes, addtoCart, product, history } = props;
  const images = (a) => [
    {
      original: a,
      thumbnail: a
    },
    {
      original: a,
      thumbnail: a
    },
    {
      original: a,
      thumbnail: a
    }
  ];

  let orderInfo = JSON.parse(localStorage.getItem("orderDetails"));
  let userInfo = JSON.parse(localStorage.getItem("userData1"));

  const memberId = userInfo && userInfo.id ? userInfo.id : "";
  const orderId = orderInfo && orderInfo.orderId ? orderInfo.orderId : "";


  const addToCartClick = (e) => {
    e.preventDefault();

    addtoCart({
      "orderId": orderId,
      "memberId": memberId,
      "productId": product.id,
      "price": product.price,
      "quantity": 1
    });
    history.push("/Cart")
  }


  return (
    <div className="productDetailComponent">
      {product ? (
        <Grid container>
          <Grid lg={7} sm={6} xs={12} item>
            <h3 className={classes.producttitle}>{product.productName}</h3>
            <p className={classes.productIdName}>

            </p>
            <div className="productSku">
              <div>
                <strong>Model :</strong><span className={classes.productid}>
                  <Markup content={product.shortDescription} />
                </span>
              </div>
              <div>
                <strong>SKU :</strong>
                <span className={classes.productid}>{product.skuId}</span>
              </div>
            </div>
            <p>
              <span className="rated">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
              </svg>
            </p>
            <ImageGallery
              items={images(product.images[0])}
              autoPlay={false}
              thumbnailPosition="left"
              showPlayButton={false}
              showNav={false}
              showFullscreenButton={false}
            />
            <div className="productdesc"> <Markup content={product.longDescription}/> </div>
          </Grid>
          <Grid lg={5} sm={6} xs={12} item>
            <h1>
              {product.currencyCode === 'USD' && "$"}
              {product.price}
            </h1>
            <div className='stockQnty'>Stock Quantity : <span>{product.stockQuantity}</span></div>
            <Grid container spacing={8}>
              <Grid item lg={6} sm={6} xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.addToCart}
                  onClick={addToCartClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  &nbsp;&nbsp;&nbsp;Add to cart
                </Button>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.addToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                    </svg>
                  </svg>
                  &nbsp;&nbsp;&nbsp; Save for later
                </Button>
              </Grid>
            </Grid>
            <div className='expansionContainer'>
              <Grid container >
                <Grid lg={12} sm={12} xs={12} item>
                  <ExanpsionPanel
                    heading="Specifications"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque excepturi enim, odio, cumque cum totam ex omnis quod neque est adipisci nobis necessitatibus animi iure magnam tempore minus. Deleniti, et."
                  />
                  <ExanpsionPanel
                    heading="Warrenty"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque excepturi enim, odio, cumque cum totam ex omnis quod neque est adipisci nobis necessitatibus animi iure magnam tempore minus. Deleniti, et."
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      ) : (<div className={classes.Spinner}>	<Spinner /> </div>)}
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    addtoCart: (product) => {
      dispatch(addToCart(product));
    }
  })
)(withStyles(styles)(withRouter(ProductDetailComponent)));
