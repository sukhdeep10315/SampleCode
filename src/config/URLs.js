export const URLList = {
    HTTP:"http://",
    HTTPS: "https://",
    Search_IP_Old:"104.154.92.99",
    Search_IP: "35.202.105.37",
    Cart_IP_Old: "35.202.122.135",
    CartAndCheckout_IP_New:"35.188.107.174",
    Checkout_IP_Old: "35.202.122.135",
    LoginAndRegistration_IP_Old:"104.198.155.47",
    LoginAndRegistration_IP_New: "104.197.18.180",
    StoreFinder_IP_Old:"104.154.36.71",
    StoreFinder_IP_New:"35.202.79.142",
    ShoppingCartAPI:"/api/shoppingcart/",
    SearchAPI:"/keywordsearch?keyword=",
    ProdcutDetailsAPI:"/products/",
    ProdcutsAPI:"/search?category1=",
    OrderAPI:"/api/order/",
    LoginAPI:"/api/login-service/",
    RegistrationAPI:"/api/register-user/user",
    getStoreFinderUsingAddress:function(zip, radius){
        return this.HTTP + this.StoreFinder_IP_New + "/storelocator/getstoredetails?address=" + zip + "&radius=" + radius;
    },
    getSearchURL: function(){
        return this.HTTP + this.Search_IP + this.SearchAPI;
    },
    getProductsURL : function() {
        return this.HTTP + this.Search_IP + this.ProdcutsAPI ;
    },
    getProductDetailsURL : function() {
        return this.HTTP + this.Search_IP + this.ProdcutDetailsAPI ;
        //`http://104.154.92.99/products/${item}`
    },
    getAddToCartURL: function(){
        return this.HTTP + this.CartAndCheckout_IP_New + this.ShoppingCartAPI + "add";
    },
    getUpdateCartURL: function(){
        return this.HTTP + this.CartAndCheckout_IP_New + this.ShoppingCartAPI + "update";
    },
    getDeleteCartURL: function(){
        return this.HTTP + this.CartAndCheckout_IP_New + this.ShoppingCartAPI + "delete/";
    },
    getCart: function(){
        return this.HTTP + this.CartAndCheckout_IP_New + this.OrderAPI;
    },
    getCheckoutURL: function(){
        return this.HTTP + this.CartAndCheckout_IP_New + this.ShoppingCartAPI + "checkout";
    },
    getRegistrationURL:function() {
        return this.HTTP + this.LoginAndRegistration_IP_New + this.RegistrationAPI;
    },
    getLoginURL:function() {
        return this.HTTP + this.LoginAndRegistration_IP_New + this.LoginAPI;
       // "http://104.198.155.47/api/login-service"
    }

}


