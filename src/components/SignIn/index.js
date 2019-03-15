import React, {useState} from "react";
import { Link ,withRouter} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import "./index.css";


const styles = theme => ({
  root: {
    flexGrow: 1
  },
    logo: {
    width: "100px",
    height: "50px",
    display: "block",
    margin: "0 auto",
    float: "left",
    paddingRight: "50px"
  },
     checkoutHeader: {
    fontSize: "30px",
    color: "#333333",
  },
     InputText: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px"
  },
    checkoutBtn: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "100%",
    margin: "30px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    }
  },
    paddingTop30: {
    padding: "30px 0 0 0"
  },
    CheckoutSection: {
     margin:"0px 0px 0px 70px",
    marginTop:"0px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
    }
        
  },
    
    marginTop30:{
        marginTop:"30px"
    },
    headerlabel:{
        fontSize:"18px",
        fontWeight:"bold",
        padding:"10px 10px 10px 0px"
    },
    userSection:{
        margin:"20px"
    },
    footerLabel: {
    textAlign: "center",
    marginTop: "25px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 15px 15px 15px"
    }
  },
   

});

const CheckoutComoponent = props => {
  const { classes,history } = props;

   const [guestEmail,setguestEmail]=useState('');
    const [errorGuestEmail, setErrorGuestEmail]=useState('');
    
    const [registeredUserEmail,setRegisteredUserEmail]=useState('');
    const [errorRegisteredUserEmail, setErrorRegisteredUserEmail]=useState('');
    
    const [registeredUserPassword,setRegisteredUserPassword]=useState('');
    const [errorRegisteredUserPassword, setErrorRegisteredUserPassword]=useState('');
    
     const handleguestEmail=(value)=>{
        setguestEmail(value);
        }
     
     const handleRegisteredEmail=(value)=>{
        setRegisteredUserEmail(value);
        }
     const handleRegisteredPassword=(value)=>{
        setRegisteredUserPassword(value);
        }


    const handleGuestSubmit=(e)=>{
    e.preventDefault();
        if(guestEmail.length === 0){setErrorGuestEmail("Please enter your email address");}
      else{setErrorGuestEmail("");}
    }
    
    const handleRegisteredSubmit=(e)=>{
    e.preventDefault();
        if(registeredUserEmail.length === 0){setErrorRegisteredUserEmail("Please enter your email address");}
      else{setErrorRegisteredUserEmail("");}
        
        if(registeredUserPassword.length === 0){setErrorRegisteredUserPassword("Please enter password");}
      else{
          history.push("/checkout");
          setErrorRegisteredUserPassword("");
      }
        if(!registeredUserPassword.length === 0 && !registeredUserEmail.length === 0){
            history.push("/checkout");
        }
    }
    
    
    
  return (
    <>
      <div className={classes.root}>
          <Grid container spacing={24}>
         <Grid item lg={12} sm={12} xs={12}>
                <Grid container className="paddingTop30">
                    <Grid item lg={8} sm={8} xs={12}>
                 <div >
                <Link to="/">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className={classes.logo}
          />
        </Link>
                <Typography className={classes.checkoutHeader}>
                  Select Your Secure Checkout Mode
                </Typography>
                  </div>
             </Grid>
             <Grid item lg={4} sm={4} xs={12}>
               <div className="cartLink" >
               <Link className="viewCartLink" to="/Cart" >View Your Cart</Link>
              </div>
          </Grid>
       </Grid>
        </Grid>
      
        <Grid item lg={12} sm={12} xs={12} >
        <Grid container  className={classes.CheckoutSection}>
     
            <Grid item lg={5} sm={5} xs={12} className={classes.userSection}>
       <form onSubmit={handleGuestSubmit}>
             <div><Typography className={classes.headerlabel}>Guest User Checkout</Typography>
                <Divider variant="left" className="devider" />
              </div>
            <div className="marginTop30">
             <Typography>Email Address :</Typography>
            </div>
             <div className="marginTop10">
                    <TextField
                        id="outlined-name"
                        label=""
                        className={classes.InputText}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        placeholder="Enter Email Address" 
                    value={guestEmail.guestEmail}
                    onChange={(e)=>handleguestEmail(e.target.value)}
                      />
             </div>
                <div>
                {errorGuestEmail && (<div className="errorCheckout">{errorGuestEmail}</div>)}
                </div>
            
            <div className="marginTop30">
                <Typography>You will have the opportunity to create an account and track your order once you complete your checkout. </Typography>      
                </div>
                
            <div className="marginTop35">
                <Button type="submit" className={classes.checkoutBtn}>Continue</Button>
            </div>
       </form>
             </Grid>
     
      <Grid item lg={5} sm={5} xs={12} className={classes.userSection}>
           <form onSubmit={handleRegisteredSubmit}>
              <div><Typography className={classes.headerlabel}>Registered User Checkout</Typography>
                <Divider variant="left" className="devider" />
         </div>
            <div className="marginTop30">
             <Typography>Email Address :</Typography>
            </div>
             <div className="marginTop10">
                    <TextField
                        id="outlined-name"
                        label=""
                        className={classes.InputText}
                        margin="normal"
                        variant="outlined"
                        placeholder="Enter Email Address"
                        type="email"
                        value={registeredUserEmail.registeredUserEmail}
                        onChange={(e)=>handleRegisteredEmail(e.target.value)}
                      />
             </div>
                <div>
                {errorRegisteredUserEmail && (<div className="errorCheckout">{errorRegisteredUserEmail}</div>)}
                </div>
                 <div className="marginTop10">
             <Typography>Password :</Typography>
            </div>
             <div className="marginTop10">
                    <TextField
                        id="outlined-name"
                        label=""
                        className={classes.InputText}
                        margin="normal"
                        variant="outlined"
                        placeholder="Enter Password" 
                        type="password"
                        value={registeredUserPassword.registeredUserPassword}
                        onChange={(e)=>handleRegisteredPassword(e.target.value)}
                      />
             </div>
            <div>
                {errorRegisteredUserPassword && (<div className="errorCheckout">{errorRegisteredUserPassword}</div>)}
                </div>
            <div className="marginTop10">
                <Button  type="submit" className={classes.checkoutBtn}>Continue</Button>
            </div>
                <div className="cartLink">
                <Typography>Forgot Password</Typography>
            </div>
      </form>
      </Grid>
        </Grid>
        </Grid>
         <Grid item lg={12} sm={12} xs={12} className={classes.footerLabel}>
              <Typography>
                ©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.
              </Typography>
              <strong>Need Help?</strong>, please call ....... or text .......
            </Grid>
      
      
      </Grid>
      </div>
    </>
  );
};
export default withStyles(styles)(withRouter(CheckoutComoponent));
