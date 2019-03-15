import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import './index.css';

const styles = theme => ({
	toolBar:{
		minHeight:'25px',
		backgroundColor:'blue'
	}
})

function Advertisement(props){
	const {classes}=props;
	return (
			<div className="AdvertisementComponent">
          			<Toolbar className={classes.toolBar}>
          					<div className='promotion'>This is a Demo Store</div>
          			</Toolbar>
			</div>
		)
}

export default withStyles(styles)(Advertisement);