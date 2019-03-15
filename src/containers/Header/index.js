import React from "react";
import HeaderComponent from "../../components/Header";
import { connect } from "react-redux";
import { searchResults } from "../../actions/Search";

const Header = ({ showNavbar, cartItems, searchResults }) => {
  return (
    <div>
      <HeaderComponent showNavbar={showNavbar} 
                       searchResults={searchResults}
                       cartItems= {cartItems} />
    </div>
  );
};

export default connect(
  ({ header }) => ({ showNavbar: header.showNavbar, cartItems: header.cartItems }),
  { searchResults }
)(Header);
