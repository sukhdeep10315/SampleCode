import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';


const styles = theme => ({

});

const ConfirmationDialog  = (props) => {

    const {
        classes,
        fullScreen
    } = props;
    const [open, setOpen] = useState(false);
  

  handleClickOpen = () => {
    setOpen(true);
  };

  handleClose = () => {
    setOpen(false);
  };

    

    return (
      <div>
        
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="confirmation-ui"
        >
          <DialogTitle id="confirmation-dialog-title">{"Order Placed Successfully"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your order is placed Successfully
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Return to Home Page
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }


ConfirmationDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog(withStyles(styles))(ConfirmationDialog);
