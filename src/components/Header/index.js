import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Location from "../Location";
import NavigationMenu from "../Navigation";
import Advertisement from "../Advertisement";
import CartBadge from "../helpers/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Camera from "../Camera";
import Button from "@material-ui/core/Button";
import "./index.css";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    display: "none",
    color: "#000",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  title: {
    display: "block",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing.unit * 1.5
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: "5px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
      marginRight: "15px"
    }
  },
  searchIcon: {
    height: "100%",
    width: "40px",
    position: "absolute",
    pointerEvents: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    right: "0",
    backgroundColor: "#0084CD",
    borderRadius: "0 3px 3px 0px",
    [theme.breakpoints.down("sm")]: {
      color: "#000",
      backgroundColor: "transparent",
      borderRadius: 0,
      left: "0",
      minWidth: "10px"
    }
  },
  cameraIcon: {
    height: "100%",
    width: "40px",
    lineHeight: "40px",
    position: "absolute",
    pointerEvents: "none",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    right: 0,
    backgroundColor: "#0084CD",
    borderRadius: "0 3px 3px 0px",
    [theme.breakpoints.down("sm")]: {
      color: "#000",
      backgroundColor: "transparent",
      borderRadius: 0,
      display: "block"
    }
  },
  inputRoot: {
    color: "#000",
    width: "100%"
  },
  inputInput: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.1)",
    [theme.breakpoints.up("md")]: {
      width: 500
    },
    [theme.breakpoints.up("lg")]: {
      width: 600
    },
    [theme.breakpoints.down("md")]: {
      width: 450
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      paddingLeft: theme.spacing.unit * 4,
      width: "100%"
    }
  },
  appBar: {
    backgroundColor: "#fafafa",
    zIndex: "1000",
    width: "100%",
    boxSizing: "border-box",
    left: 0,
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      width: "100%"
    }
  },
  signin: {
    position: "relative",
    top: "4px",
    fill: "rgba(0, 0, 0, 0.54)",
    display: "flex",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  cart: {
    fill: "#000",
    margin: "0 15px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px"
    }
  },
  logo: {
    width: "60px",
    height: "60px",
    position: "relative",
    top: "4px",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px"
    }
  },
  toolBar: {
    minHeight: "70px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    border: "none",
    borderTop: 0,
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      minHeight: "45px",
      borderBottom: "none"
    },
    [theme.breakpoints.up("sm")]: {
      border: "1px solid lightgrey"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderBottom: "1px solid lightgrey"
    }
  },
  NavigationMenu: {
    padding: "0",
    backgroundColor: "#fafafa",
    minHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  paper: {
    height: "calc(100%)",
    top: 75
  },
  mobileSearch: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex"
    }
  },
  searchIconMobile: {
    color: "rgba(0, 0, 0, 0.54)",
    padding: "0 10px"
  },
  cameraIconMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex"
    }
  },
  iconStyles: {
    margin: "0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: 0
    }
  },
  signLabel: {
    color: "black",
    fontSize: "12px",
    margin: "-6px 5px 0px 0px",
    textAlign:"center", 
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: "8px",
      marginLeft: "5px",
      marginTop: "-3px",
      textAlign:"center"
    }
  },
  svgArrowDown: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  svgMyAcc: {
    margin: "0px 0px 7px 12px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-3px"
    }
  },
  accIconDiv: {
    [theme.breakpoints.down("sm")]: {
      marginRight: ""
    }
  }
});

function SearchAppBar(props) {
  let [open, setOpen] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  console.log(cameraOpen);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  let [anchorEl, setAnchorE1] = useState(null);
  const handleClick = event => {
    setAnchorE1(event.currentTarget);
  };
  const [search, setSearch] = useState("");
  const handleClose = () => {
    setAnchorE1(null);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(search){
      props.searchResults(search).then(() => {
        props.history.push("/search");
      });
    }
    
  };

  let userInfo = JSON.parse(localStorage.getItem("userData1"));

  const signOut = () => {
    console.log("Signing Out");
    localStorage.removeItem("userData1");
    userInfo = "";
  };

  const { classes, history, showNavbar, cartItems } = props;
  const [totalQuantity, setTotalQuantity] = useState();
  useEffect(() => {
    if (cartItems) {
      let count = 0;
      cartItems.forEach(item => {
        count = count + item.quantity;
      });

      setTotalQuantity(count);
    }
  });
  const sideList = (
    <div className={classes.list}>
      <List>
        {[
          { category: "Electronics", url: "/shopping/Electronics" },
          { category: "Toys", url: "/shopping/Toys" },
          { category: "Apparel", url: "/shopping/Apparel" },
          { category: "Home Decor", url: "/shopping/Home-Decor" },
          { category: "Gift Card", url: "/shopping/Gift-Cards" }
        ].map((text, index) => (
          <ListItem button key={index}>
            <Link to={text.url} className="drawerListStyles">
              <ListItemText primary={text.category} />
              <ListItemIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </ListItemIcon>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div className="customContainer">
      <div className="Header">
        <AppBar position="fixed" className={classes.appBar}>
          {/* <Advertisement /> */}
          <Toolbar className={classes.toolBar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  className={classes.logo}
                />
              </Link>
            </Typography>

            <Location />
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon />
              </div> */}

              <form onSubmit={handleSubmit}>
                <Button type="submit" className={classes.searchIcon}>
                  <SearchIcon />
                </Button>
                <InputBase
                  placeholder="Search....."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </form>
            </div>
            <div className={classes.grow} />
            <div className={classes.cameraIconMobile}>
              <i
                className={`material-icons`}
                onClick={() => setCameraOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="3.2" />
                  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
                {cameraOpen && (
                  <Camera
                    open={cameraOpen}
                    toggleDialog={() => setCameraOpen(false)}
                  />
                )}
              </i>
            </div>
            <div className={classes.accIconDiv}>
              <p className={classes.signLabel}>
                {userInfo && userInfo.userFirstName
                  ? userInfo.userFirstName
                  : ""}
              </p>
              <i
                className={`material-icons ${classes.signin}`}
                onClick={handleClick}
              >
                <svg
                  className={classes.svgMyAcc}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                >
                  <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z" />
                </svg>
                <span>
                  <svg
                    className={classes.svgArrowDown}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                  </svg>
                </span>
              </i>

              {!(userInfo && userInfo.userFirstName) && (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      history.push("/login");
                    }}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      history.push("/register");
                    }}
                  >
                    Register
                  </MenuItem>
                </Menu>
              )}
              {userInfo && userInfo.userFirstName && (
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={signOut}>Signout</MenuItem>
                </Menu>
              )}
            </div>
            <div className={classes.iconStyles}>
              <Link to="/Cart">
                <CartBadge items={totalQuantity} />{" "}
              </Link>
            </div>

            <Drawer
              open={open}
              onClose={toggleDrawer}
              classes={{ paper: classes.paper }}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                {sideList}
              </div>
            </Drawer>
          </Toolbar>
          {showNavbar && (
            <Toolbar className={classes.NavigationMenu}>
              <NavigationMenu />
            </Toolbar>
          )}
        </AppBar>
      </div>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SearchAppBar));
