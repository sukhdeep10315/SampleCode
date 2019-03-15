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
import Paper from '@material-ui/core/Paper';
import "./index.css";
import { registerPartial } from "handlebars";
import Spinner from "../helpers/Spinner";
import { red } from "ansi-colors";

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
  wid50: {
    width: "200px",
    float: "left",
    border: "1px solid black"
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
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "10px",
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
      backgroundColor: "#0084CD"
    }
  },
  txtaln: {
    textAlign: "right"
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
    height: "30px"
  },
  registerHead: {
    textAlign: "center",
    fontSize: "24px"
  },
  logo: {
    width: "60px",
    height: "60px",
    display: "block",
    margin: "0 auto",
    padding: "20px 0 0 0"
  },
  login: {
    fontSize: "14px",
    textAlign: "center"
  },
  marginTop10: {
    marginTop: "10px"
  },
  marginTop30: {
    marginTop: "30px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#FF0000',
  },
    spinnerDiv:{
        textAlign:"center",
        marginTop:"20%"
    }
});

function LoginComponent(props) {
  const { classes, history, registration, user } = props;

  const [errorRegister, setErrorRegister] = useState('');

  const [firstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');

  const [lastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');

  const handleFirstName = (value) => {
    setFirstName(value);
  }
  const handleLastName = (value) => {
    setLastName(value);
  }
  const handleEmail = (value) => {
    setEmail(value);
  }
  const handlePassword = (value) => {
    setPassword(value);
  }
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  }
  const [isLoading, setIsLoading] = useState('');
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!firstName) { setErrorFirstName("Please enter first name"); }
    else { setErrorFirstName(""); }

    if (!lastName) { setErrorLastName("Please enter last name"); }
    else { setErrorLastName(""); }

    if (!email) { setErrorEmail("Please enter email address"); }
    else { setErrorEmail(""); }

    if (!password) { setErrorPassword("Please enter password"); }
    else { setErrorPassword(""); }

    if (!phoneNumber) { setErrorPhoneNumber("Please enter phone number"); }
    else { setErrorPhoneNumber(""); }

    if (!errorFirstName && !errorLastName && !errorEmail && !errorPassword && !errorPhoneNumber) {
        setIsLoading(true);
      registration({
        "logonId": email,
        "password": password,
        "address": {
          firstName,
          lastName,
          email,
          phoneNumber,
          "gender": "",
          "dateOfBirth": "",
          "address1": "",
          "address2": "",
          "city": "",
          "state": "",
          "country": "",
          "zipCode": "",
          "status": "1",
          "addressType": "SB"
        }
      }).then((resp) => navigateToHome(resp));
    }
  }

  const navigateToHome = (data) => {
    console.log("resp register", data);
    // return user ?
    //   (user.errorMessage ? setErrorRegister(user.errorMessage): history.push("/")) :
    //     setErrorRegister("Sorry!! There is some error with Registration service.");

        const userData=data.payload;
      
        const userFirstName=userData && userData.userDetails && userData.userDetails.address?userData.userDetails.address.firstName:"";
        const userId=userData && userData.userDetails && userData.userDetails.id?userData.userDetails.id:"";     
        const addressId=userData && userData.userDetails && userData.userDetails.address?userData.userDetails.address.id:"";     
        let userLogInfo = {
        userLogedId:userId,
        userFirstName:userFirstName,
        addressId:addressId
        }
            
        let objectSerialized = JSON.stringify(userLogInfo);
        localStorage.setItem("userData1", objectSerialized);
          
          setIsLoading(false);
           return userData ?
          (userData.errorMessage?setErrorRegister(userData.errorMessage):history.push('/'))
          : setErrorRegister("Sorry!! There is some error with Registration service.");
  }


  return (
    <div>{isLoading?<div className={classes.spinnerDiv}><Spinner /> </div>:<div className={classes.root}>
      <div>
        <Link to="/"><img
          src="/assets/images/logo.png"
          alt="logo"
          className={classes.logo}
        /></Link>
        <p className={classes.registerHead}>Register to DemoStore</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid lg={4} sm={4} xs={12} item />
          <Grid item lg={4} sm={4} xs={12}>
            {errorRegister &&
              <Paper className={classes.paper}>
                {errorRegister}
              </Paper>
            }

            <Card>
              <CardContent>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight30}
                  >
                    <Typography className={classes.lblStyle}>
                      First Name :
                  </Typography>
                  </Grid>
                  <Grid lg={1} sm={1} item />
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight}
                  >
                    <TextField
                      id="outlined-bare"
                      placeholder="Enter First Name"
                      margin="normal"
                      variant="outlined"
                      name="firstName"
                      className={classes.txtStyle}
                      value={firstName.firstName}
                      onChange={(e) => handleFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid lg={1} sm={1} item />
                  {errorFirstName && (<div className="errorReg">{errorFirstName}</div>)}
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight30}
                  >
                    <Typography className={classes.lblStyle}>
                      Last Name :
                  </Typography>
                  </Grid>
                  <Grid lg={1} sm={1} item />
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight}
                  >
                    <TextField
                      id="outlined-bare"
                      placeholder="Enter Last Name"
                      margin="normal"
                      variant="outlined"
                      className={classes.txtStyle}
                      value={lastName.lastName}
                      onChange={(e) => handleLastName(e.target.value)}

                    />
                  </Grid>
                  <Grid lg={1} sm={1} item />
                  {errorLastName && (<div className="errorReg">{errorLastName}</div>)}
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight30}
                  >
                    <Typography className={classes.lblStyle}>Email :</Typography>
                  </Grid>
                  <Grid lg={1} sm={1} item />
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight}
                  >
                    <TextField
                      id="outlined-bare"
                      placeholder="Enter E-mail"
                      margin="normal"
                      variant="outlined"
                      className={classes.txtStyle}
                      type="email"
                      value={email.email}
                      onChange={(e) => handleEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid lg={1} sm={1} item />
                  {errorEmail && (<div className="errorReg">{errorEmail}</div>)}
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight30}
                  >
                    <Typography className={classes.lblStyle}>
                      Password :
                  </Typography>
                  </Grid>
                  <Grid lg={1} sm={1} item />
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight}
                  >
                    <TextField
                      id="outlined-bare"
                      placeholder="Enter Password"
                      margin="normal"
                      variant="outlined"
                      className={classes.txtStyle}
                      type="password"
                      value={password.password}
                      onChange={(e) => handlePassword(e.target.value)}
                    />
                  </Grid>
                  <Grid lg={1} sm={1} item />
                  {errorPassword && (<div className="errorReg">{errorPassword}</div>)}
                </Grid>
                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid
                    item
                    lg={10}
                    sm={10}
                    xs={12}
                    className={classes.rowHeight30}
                  >
                    <Typography className={classes.lblStyle}>Phone :</Typography>
                  </Grid>
                  <Grid lg={1} sm={1} item />
                </Grid>

                <Grid container>
                  <Grid lg={1} sm={1} item />
                  <Grid item lg={10} sm={10} xs={12} style={{ marginBottom: "-15px" }}>
                    <TextField
                      id="outlined-bare"
                      placeholder="Enter Phone number"
                      margin="normal"
                      variant="outlined"
                      type="tel"
                      name="phone"
                      className={classes.txtStyle}
                      value={phoneNumber.phoneNumber}
                      onChange={(e) => handlePhoneNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid lg={1} sm={1} item />
                  {errorPhoneNumber && (<div className="errorReg">{errorPhoneNumber}</div>)}
                </Grid>
                <Grid container className={classes.marginTop30}>
                  <Grid lg={1} sm={1} item />
                  <Grid item lg={10} sm={10} xs={12} className={classes.txtaln}>
                    <Button className={classes.btnStyle} type="submit">REGISTER</Button>
                  </Grid>
                  <Grid lg={1} sm={1} item />
                </Grid>
                <Grid container>
                  <Grid item lg={1} sm={1} />
                  <Grid item lg={10} sm={10} xs={12}>
                    <p className={classes.login}>
                      Already DemoStore?&nbsp;
                    <Link to="/login" className="link">
                        Login here
                    </Link>
                    </p>
                  </Grid>
                  <Grid item lg={1} sm={1} />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid lg={4} sm={4} xs={12} item />
        </Grid>
      </form>
    </div>}</div>
  );
}

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(LoginComponent));
