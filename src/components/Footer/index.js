import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./index.css";

const styles = theme => ({
  linkColor: {
    color: "#333",
    fontSize: "14px",
      "&:hover": {
      cursor: "pointer"
    },
  },
  footerBottomLinks: {
    color: "#0086b3",
    fontSize: "12px",
    margin: "0px 15px 0px 0px",
      borderRight:"1px solid gray",
      paddingRight:"12px",
      "&:hover": {
      cursor: "pointer"
    },
  },
    footerLastTab: {
    color: "#0086b3",
    fontSize: "12px",
    margin: "0px 15px 0px 0px",
      "&:hover": {
      cursor: "pointer"
    },
  },
  margin15: {
    background: "#f2f2f2",
    padding: "20px",
      [theme.breakpoints.down("xs")]: {
      padding:"25px 3px 0px 3px",
          
    }
  },
  footerHeader: {
    marginRight: "8px",
    marginLeft: "8px"
  },
  fhead: {
    height: "25px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px"
    }
  },
  footerLink: {
    height: "26px",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      float: "left",
      fontSize: "8px",
      marginRight: "15px",
      height: "28px",
    }
  },
  footerLabel: {
    padding:"0px 10px 0px 10px", 
      fontSize:"14px", 
      textAlign:"center", 
      marginTop:"25px",
      
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    fontSize:"12px", 
    }
  },
  footerNav: {
    textAlign: "center",
  },
  mobView: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1px"
    }
  },

  footerImage: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
      "&:hover": {
      cursor: "pointer"
    },
  },
  socialLinks: {
    color: "#333",
    fontSize: "14px",
    padding: "0px 0px 30px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
    demoStore:{
        padding:"5px 5px 5px 10px", background: "#f2f2f2"
    },
     stayCon:{
       padding:"10px", paddingTop:"20px", background: "#f2f2f2"
     },
    demoView:{
        [theme.breakpoints.down("xs")]: {
      display: "none"
    }
    },
    demoMobView:{
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
        [theme.breakpoints.down("xs")]: {
      display: "block"
    }
    },
    heading:{
        color:"gray", fontSize:"14px"
    }
});

const FooterComoponent = props => {
  const { classes, history } = props;
    
    const demostoreList = [
    { name: "Features"},
    { name: "Your Order"},
    { name: "Returns"},
    { name: "Shipping & Delivery"},
    { name: "Help & FAQs"}
  ];
    
    const stayConnected=[
        {img:"/assets/images/facebook.png"},
        {img:"/assets/images/twitter.png"},
        {img:"/assets/images/pintrest1.png"},
        {img:"/assets/images/instagram1.png"},
        {img:"/assets/images/blog1.png"},
    ];
    
    const supportServices= [
    { name: "Customer Services"},
    { name: "Documentations"},
    { name: "Help"},
    { name: "Premium Support"},
    { name: "Solution Partners"}
  ];

  return (
    <>
      <Grid container className={classes.margin15}>
        <Grid item lg={4} sm={4} xs={12}>
          
       <div className={classes.demoView}><div className={classes.fhead}>
            <Typography>
              <strong>Demostore</strong>
            </Typography>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Features</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Your Order</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Returns</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Shipping & Delivery</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Help & FAQs</Link>
          </div></div>
      
         <div className={classes.demoMobView}>
         <ExpansionPanel style={{borderRadius:"0px"}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon /> } style={{paddingLeft:"10px"}}>
          <div className={classes.heading}><strong>Demostore</strong></div>
           </ExpansionPanelSummary>
          {demostoreList.map(y=>(<div className={classes.demoStore}  key={y.name}><Link className={classes.linkColor}>{y.name}</Link></div>))}
         </ExpansionPanel>
          </div>
      
        </Grid>
        <Grid item lg={4} sm={4} xs={12} className={classes.mobView}>
          
            <div className={classes.demoView}><div className={classes.fhead}>
            <Typography>
              <strong>Stay Connected</strong>
            </Typography>
          </div>
          <div className={classes.footerLink}>
            <img src="/assets/images/facebook.png" alt="facebook" className={classes.footerImage} />
            <Link className={classes.linkColor}>Facebook</Link>
          </div>
          <div className={classes.footerLink}>
            <img src="/assets/images/twitter.png" alt="twitter" className={classes.footerImage} />
            <Link className={classes.linkColor}>Twitter</Link>
          </div>
          <div className={classes.footerLink}>
            <img src="/assets/images/pintrest1.png" alt="pintrest" className={classes.footerImage} />
            <Link className={classes.linkColor}> Pintrest</Link>
          </div>

          <div className={classes.footerLink}>
            <img src="/assets/images/instagram1.png" alt="instagram" className={classes.footerImage} />
            <Link className={classes.linkColor}>Instagram</Link>
          </div>
          <div className={classes.footerLink}>
            <img src="/assets/images/blog1.png" alt="pintrest" className={classes.footerImage} />
            <Link className={classes.linkColor}>Blog</Link>
          </div>
            </div>

            <div>
             <div className={classes.demoMobView}>
         <ExpansionPanel style={{borderRadius:"0px"}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon /> } style={{paddingLeft:"10px"}}>
          <div className={classes.heading}><strong>Stay Connected</strong></div>
           </ExpansionPanelSummary>
          <div className={classes.stayCon}>{stayConnected.map(y=>(
            <img key={y.img} src={y.img} alt="pintrest" className={classes.footerImage} style={{paddingRight:"30px"}} />))}</div>
         </ExpansionPanel>
          </div>    
            </div>

        </Grid>

        <Grid item lg={4} sm={4} xs={12} className={classes.mobView}>
          <div className={classes.demoView}><div className={classes.fhead}>
            <Typography>
              <strong>Support & Services</strong>
            </Typography>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Customer Services</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}> Documentations</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}> Help</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Premium Support</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Solution Partners</Link>
          </div>
        </div>
        <div className={classes.demoMobView}>
        <ExpansionPanel style={{borderRadius:"0px"}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon /> } style={{paddingLeft:"10px"}}>
          <div className={classes.heading}><strong >Support & Services</strong></div>
           </ExpansionPanelSummary>
          {supportServices.map(y=>(<div className={classes.demoStore}  key={y.name}><Link className={classes.linkColor}>{y.name}</Link></div>))}
         </ExpansionPanel>
                
        </div>
        </Grid>

        <Grid item lg={12} sm={12} xs={12} style={{paddingBottom:"20px"}}>
          <Grid container spacing={24}>
            <Grid item lg={12} sm={12} xs={12}>
              <div className={classes.footerLabel}>
                ©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.
              </div>
              <div className={classes.footerLabel} style={{marginTop:"10px"}}><strong>Need Help?</strong>, please call ....... or text .......</div>
            </Grid>

            <Grid item lg={12} sm={12} xs={12} className={classes.footerNav}>
              <Link className={classes.footerBottomLinks}>
                Privacy and Security
              </Link>
              <Link
                className={classes.footerBottomLinks}
                onClick={() => history.push("/")}
              >
                Mobile Site
              </Link>
              <Link className={classes.footerLastTab}>Site map</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(withStyles(styles)(FooterComoponent));
