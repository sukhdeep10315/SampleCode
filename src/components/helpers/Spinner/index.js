import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  progress: {
    color: "#000"
  }
});

function CircularUnderLoad(props) {
  const { classes } = props;
  return (
    <CircularProgress
      disableShrink
      value={100}
      className={classes.progress}
      size={60}
      thickness={4}
    />
  );
}

export default withStyles(styles)(CircularUnderLoad);
