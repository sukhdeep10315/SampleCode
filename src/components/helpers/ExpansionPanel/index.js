import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./index.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  expansionPanel: {
    borderRadius: "0 !important"
  },
  expansionDetails: {
    padding: "0 0 10px 40px"
  },
});


function SimpleExpansionPanel(props) {
  const { classes, heading, content, activePanel, history } = props;


  const [load, setLoad] = useState(false);


  const pathArray = window.location.pathname.split('/');
  let expanded = pathArray[1] != "search" ? 
                  (pathArray[2].indexOf('-') > -1 ? 
                        pathArray[2].replace("-", " ") : pathArray[2]) : (activePanel?activePanel.category:null);

  const [expand, setExpanded] = useState(expanded);
  //console.log("expand " , expand ,  "expanded ", expanded, "activePanel : ", activePanel, "heading :", heading);

  useEffect(() => {
    setLoad(prev => !prev);
    setExpanded(activePanel?activePanel.category:window.location.pathname.split('/')[2])
  }, [window.location.href, activePanel ])


  const [itemValue, setItemValue] = useState(1);
  const handleActive = (val) => {
    setItemValue(val);
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}
        expanded={expand === heading}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} onClick={() => { history.push(`/shopping/${heading}`) }}>{heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <ul className="expansionPanel">
            {typeof content === 'string' ? (content) : content.map(item => (
              <Link to={`/shopping/${item.path}/${item.cat}`} key={item.id} >
                <li className={item.id === itemValue ? "active" : null}
                  onClick={() => handleActive(item.id)}
                >{item.cat}</li>
              </Link>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SimpleExpansionPanel));
