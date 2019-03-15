import React, { useEffect } from "react";
import { connect } from "react-redux";
import SignInpage from "../../components/SignIn";
import * as actions from "../../actions/Header";

const SignIn = ({ setHeaderStatus, setFooterStatus }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <SignInpage />;
};

export default connect(null,actions)(SignIn);