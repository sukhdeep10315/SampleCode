import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./index.css";

const styles = theme => ({});

function NavigationMenu(props) {
  const NavBar = [
    { category: "Electronics", url: "/shopping/Electronics" },
    { category: "Toys", url: "/shopping/Toys" },
    { category: "Apparel", url: "/shopping/Apparel" },
    { category: "Home Decor", url: "/shopping/Home-Decor" },
    { category: "Gift Cards", url: "/shopping/Gift-Cards" }
  ].map(item => (
    <li key={item.category}>
      <Link to={item.url} className="nav-item">
        {item.category}
      </Link>
    </li>
  ));
  return (
    <div className="navigationMenu">
      <div className="customContainer">
        <ul className="NavigationMenu-nav-bar">{NavBar}</ul>
      </div>
    </div>
  );
}

export default withStyles(styles)(NavigationMenu);
