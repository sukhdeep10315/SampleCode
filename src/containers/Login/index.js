import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginComponent from "../../components/Login";
import {setHeaderStatus,setFooterStatus} from "../../actions/Header";
import {login} from '../../actions/Login';

const Login = ({ setHeaderStatus, setFooterStatus, login, user }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <LoginComponent login={login} user={user}/>;
};

export default connect(
  ({login})=> ({user:login.user}),
  {setHeaderStatus,setFooterStatus,login}
)(Login);
