import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Spinner from "../helpers/Spinner";
import "./index.css";

const styles = theme => ({
  root: {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100%",
    width: "100%",
    flexDirection: "column"
  },
  lblStyle: {
    margin: "20px 0px",
    textAlign: "left"
  },
  txtStyle: {
    width: "100%",
    height: "30px"
  },
  btnStyle: {
    textTransform: "capitalize",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "500",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD",
      color: "#fff"
    }
  },
  width100: {
    width: "100%"
  },
  reghide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  rowHeight: {
    height: "40px"
  },
  rowHeight30: {
    height: "40px"
  },
  loginHead: {
    textAlign: "center",
    fontSize: "24px"
  },
  logo: {
    width: "60px",
    height: "60px",
    display: "block",
    margin: "0 auto",
    padding: "50px 0 0 0"
  },
  register: {
    fontSize: "14px",
    textAlign: "center"
  },
    spinnerDiv:{
        textAlign:"center",
        marginTop:"20%"
    },
    forgotPwd:{
       textAlign:"right",
        
    }
});

function LoginComponent(props) {
  const { classes, login, history, user } = props;
  const [logonId, setLogonId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState('');
    
  const handleSubmit = (e) => {
      setIsLoading(true);
    e.preventDefault();
    login({
      logonId,
      password
    })
      .then((resp) => validateLogin(resp))
  }
  const validateLogin = (data) => {
    // return user ?
    //   (user.errorMessage ? setError(user.errorMessage) : history.push('/'))
    //   : setError("Login failed.Please check credentials");

      const userData=data?data.payload:"";
      
      console.log(userData);
      
      const userFirstName=userData && userData.userDetails && userData.userDetails.address?userData.userDetails.address.firstName:"";
      const userId=userData && userData.userDetails && userData.userDetails.id?userData.userDetails.id:""; 
      const userAddressId=userData && userData.userDetails && userData.userDetails.address?userData.userDetails.address.id:"";
      
      
      
      let userLogInfo = {
      userLogedId:userId,
      userFirstName:userFirstName,
      addressId:userAddressId      
      }
          
      let objectSerialized = JSON.stringify(userLogInfo);
      localStorage.setItem("userData1", objectSerialized);
        setIsLoading(false);
      return userData ?
        (userData.errorMessage? setError(userData.errorMessage): history.push('/'))
        : setError("Login failed.Please check credentials");
  }

  return (
    <div>{isLoading?<div className={classes.spinnerDiv}><Spinner /> </div>:<div className={classes.root}>
      <div>
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className={classes.logo}
          />
        </Link>
        <p className={classes.loginHead}>Sign in to DemoStore</p>
      </div>
      <Grid container className={classes.loginComponent}>
        <Grid lg={4} sm={4} item />
        <Grid item lg={4} sm={4} xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid
                  item
                  lg={10}
                  sm={10}
                  xs={12}
                  className={classes.rowHeight30}
                >
                  <Typography className={classes.lblStyle}>
                    User name
                  </Typography>
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item lg={1} sm={1} />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight}
                  >
                    <TextField
                      placeholder="Enter User name"
                      margin="normal"
                      variant="outlined"
                      className={classes.txtStyle}
                      value={logonId}
                      onChange={(e) => setLogonId(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={1} sm={1} />
                </Grid>
                <Grid container>
                  <Grid item lg={1} sm={1} />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight30}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography className={classes.lblStyle}>
                          Password
                      </Typography>
                      </Grid>
                      <Grid item lg={6} sm={6} xs={6} style={{marginTop:"20px"}} >                        
                          <div className={classes.forgotPwd}><Link to="/forgotpassword" className="forgotPassword">
                            Forgot password?
                        </Link>
                       </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={1} sm={1} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={1} sm={1} />
                  <Grid item lg={10} sm={10} xs={12}>
                    <TextField
                      placeholder="Enter password"
                      margin="normal"
                      variant="outlined"
                      className={classes.txtStyle}
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={1} sm={1} />
                </Grid>
                <Grid container>
                  <Grid item lg={1} sm={1} />
                  <Grid item lg={10} sm={10} xs={12} className={classes.txtaln}>
                    <Button className={classes.btnStyle} type="submit">LOG IN</Button>
                  </Grid>
                  <Grid item lg={1} sm={1} />
                  {error && (<div className="error">{error}</div>)}
                </Grid>
              </form>
              <Grid container>
                <Grid item lg={1} sm={1} />
                <Grid item lg={10} sm={10} xs={12}>
                  <p className={classes.register}>
                    New to DemoStore?&nbsp;
                    <Link to="/register" className="link">
                      Create account here
                    </Link>
                  </p>
                </Grid>
                <Grid item lg={1} sm={1} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={4} sm={4} item />
      </Grid>
    </div>}</div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(LoginComponent));
