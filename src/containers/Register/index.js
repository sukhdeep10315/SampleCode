import React, { useEffect } from "react";
import { connect } from "react-redux";
import RegisterComponent from "../../components/Register";
import  {registration} from "../../actions/Register";
import {setHeaderStatus,setFooterStatus} from "../../actions/Header";

const Register  = ({ setHeaderStatus, setFooterStatus, registration, user  }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return (
    <div>
      <RegisterComponent registration={registration} user={user} />
    </div>
  );
};

export default connect(
  null,
  {setHeaderStatus,setFooterStatus,registration}
)(Register);
