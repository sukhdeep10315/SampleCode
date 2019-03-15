import React, {useState,useEffect} from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const styles = theme => ({
    root: {
    flexGrow: 1,
    marginTop: "150px",
        [theme.breakpoints.down("sm")]: {
       marginTop: "90px",
    }
  },
    heading:{
        fontWeight:"bold",
        fontSize:"25px",
        textAlign:"center",
        marginTop:"80px",
        [theme.breakpoints.down("xs")]: {
       marginTop:"0px",
    }
    },
    devider: {
    backgroundColor: "#bfbfbf",
   
  },
    nearMeBtn: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "100%",
    margin: "0px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    },
    [theme.breakpoints.down("sm")]: {
       marginLeft: "0px",
       width:"91%"
    } ,
    [theme.breakpoints.down("xs")]: {
       marginLeft: "0px",
        width:"100%"
    }
  },
     findStoreBtn: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "100%",
    margin: "1px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    },
    [theme.breakpoints.down("sm")]: {
       marginLeft: "25px",
    } ,
    [theme.breakpoints.down("xs")]: {
       marginLeft: "0px",
    }
  },
  storecontainer:{
      backgroundColor:"#f2f2f2"
  },
 marginTop30px:{
     marginTop:"30px"
 },
    marginTop20px:{
     marginTop:"20px"
 },
      marginTop15px:{
     marginTop:"15px"
 },
     marginTop5px:{
     marginTop:"5px"
 },
    searchStoreGrid:{
        padding:"10px", marginTop:"20px"
    },
    searchStoreLblGrid:{
        borderRight:"2px Solid gray",
        marginTop:"10px",
        [theme.breakpoints.down("xs")]: {
       borderRight:"0px Solid gray",
    }
    },
    InputText: {
    width: "100%",
    height: "35px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
        [theme.breakpoints.down("lg")]: {
      width:"37%"
    },
    [theme.breakpoints.down("sm")]: {
      width:"75%"
    } ,
    [theme.breakpoints.down("xs")]: {
      width:"87%"
    } ,
  },
    avatarStyle:{
        width:"30px",
        height:"30px", 
        float:"left", 
        backgroundColor:"#ff8533"
    },
    labelStyle:{
        width:"auto", float:"left",paddingRight:"10px"
    },
    storesDiv:{padding:"10px",
               border:"1px solid #bfbfbf",
               borderRadius:"5px",
               marginTop:"10px",
                [theme.breakpoints.down("xs")]: {
      margin:"10px"
    }
              },
    locationDiv:{
        marginTop:"20px", marginLeft:"40px"
    },
    hoursDiv:{
        marginTop:"10px", marginLeft:"40px"
    },
    mapDiv:{
        width:"98%", 
        height:"300px",
        margin:"10px", 
        border:"1px solid #bfbfbf"}
});

const StoreFinderComponent = props => {
  const { classes, history,findStores, storeList } = props;
    
   const [address,setAddress]=useState('');
    const getAddress=(value)=>{
        setAddress(value);
    }
    const [radius,setRadius]=useState('');
     const getRadius=(value)=>{
        setRadius(value);
    }
   
    const getStoresByAddressRadius=()=>{
        findStores({
            "address":address,
            "radius":radius
        });
    }
    

    console.log("StoreList: " , storeList);
    
    var stores = [{"lat":38.2580403,"lng":-85.6427234,"address":"4174 Westport Rd, Louisville, KY 40207","store_info":"8:00 am - 11:00 pm","id":"1"},{"lat":38.2352777,"lng":-85.5723084,"address":"12535 Shelbyville Rd, Louisville, KY 40243","store_info":"8:00 am - 10:00 pm","id":"11"},{"lat":38.2352777,"lng":-85.5723084,"address":"14041 Shelbyville Rd, Louisville, KY 40245","store_info":"8:00 am - 10:00 pm","id":"12"},{"lat":38.2351533,"lng":-85.5723084,"address":"221 S Hurstbourne Pkwy, Louisville, KY 40222","store_info":"8:00 am - 10:00 pm","id":"9"},{"lat":38.2524155,"lng":-85.6804019,"address":"4123 Shelbyville Rd, Louisville, KY 40207","store_info":"8:00 am - 10:00 pm","id":"10"},{"lat":38.2972954,"lng":-85.5577398,"address":"4101 Towne Center Dr, Louisville, KY 40241","store_info":"8:00 am - 11:00 pm","id":"2"},{"lat":38.248999,"lng":-85.531099,"address":"12101 SHELBYVILLE RD, MIDDLETOWN, KY 40243","store_info":"10:00 am - 10:00 pm","id":"7"}];
    
    const storeDetails=stores.map((item,index) => (<div className={classes.storesDiv} key={item.name}>
           <div ><Avatar className={classes.avatarStyle} >{item.id}</Avatar>
              <div style={{marginLeft:"40px"}}><Typography >{item.name}</Typography></div>
            </div>
            <div className={classes.locationDiv}><strong className={classes.labelStyle}>Location :</strong>
            <Typography style={{fontSize:"13px"}}>{item.address} </Typography></div>
            <div className={classes.hoursDiv}><strong className={classes.labelStyle}>Hours :</strong>
            <Typography style={{fontSize:"13px"}}>{item.store_info}</Typography></div>
           </div>));
    
    return (
    <>
    <div className={classes.root}>        
        <div><Grid container>
        <Grid item lg={12} sm={12} xs={12}>
        <Grid container className={classes.storecontainer}>
        <Grid item lg={4} sm={4} xs={12} className={classes.searchStoreLblGrid}>
                <div className={classes.heading}>Search Stores around you</div>
            </Grid>
        <Grid item lg={8} sm={8} xs={12} className={classes.searchStoreGrid}>
        <Grid container>
        <Grid item lg={3} sm={3} xs={4} >
        <div style={{fontSize:"14px"}}> Find a store</div>
        </Grid>
        <Grid item lg={3} sm={5} xs={7} >
        <div><Button className={classes.nearMeBtn} >Near Me</Button></div>
        </Grid>
        </Grid>
           
            <Divider className={classes.devider} style={{marginTop:"15px"}}/>
        <Grid container className={classes.marginTop15px}>  
         <Grid item lg={12} sm={12} xs={12}> 
        <Grid container>
        <Grid item lg={3} sm={3} xs={4}>
        <div className={classes.marginTop5px} style={{fontSize:"14px"}}>Enter Zipcode or City & State</div>
        </Grid>
       
        <Grid item lg={8} sm={6} xs={8}>
         <TextField   
                        id="outlined-name"
                        label=""
                        className={classes.InputText}
                        margin="normal"
                        variant="outlined"
                        placeholder=""
                        onChange={(e)=>getAddress(e.target.value)}
                      />
        </Grid>
             </Grid>
           
        </Grid> 
        <Grid item lg={12} sm={12} xs={12} className={classes.marginTop5px}>
        <Grid container>
        <Grid item lg={3} sm={3} xs={4}>
        <div className={classes.marginTop5px} style={{fontSize:"14px"}}>Within miles</div>
        </Grid>
        <Grid item lg={1} sm={1} xs={2}>
        <TextField  style={{width:"50px"}}
                        id="outlined-name"
                        label=""
                        className={classes.InputText}
                        margin="normal"
                        variant="outlined"
                        placeholder="" 
                        onChange={(e)=>getRadius(e.target.value)}
                      />
        </Grid>
        <Grid item lg={2} sm={3} xs={5} >
        <Button className={classes.findStoreBtn} onClick={getStoresByAddressRadius}>Find Stores</Button>
        </Grid>
        </Grid>
        </Grid>
        </Grid> 
        </Grid>
        </Grid>
        </Grid>
        </Grid>
        <Divider className={classes.devider} /></div>
        
        <div>
        <Grid container style={{paddingTop:"10px"}}>
        <Grid item  lg={4} sm={4} xs={12}>
           <div>{storeDetails}</div>        
       </Grid>
        <Grid item  lg={8} sm={8} xs={12} >
           <div className={classes.mapDiv} id="map">
              <Map style={{width:"59%", height:"400px"}}
        item
        xs = { 12 }
        google = {props.google }
        zoom = { 14 }
        initialCenter = {{ lat: 38.2496307, lng: -85.5769251 }} >
          <Marker position = {{ lat: 38.2580403, lng: -85.6427234 }} />
           <Marker position = {{ lat: 38.2352777, lng: -85.5723084 }}  />
          </Map>
           </div> 
            
        </Grid>
        </Grid>
        </div>
    </div>
    </>);
};
export default GoogleApiWrapper({
    api: (process.env.AIzaSyBu0GUKiUnrc20TGT2I4WJxV25oqPOYf7g)
})(withRouter(withStyles(styles)(StoreFinderComponent)));
 
    