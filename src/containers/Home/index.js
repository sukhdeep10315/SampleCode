import React, { useEffect } from "react";
import HomeComponent from "../../components/Home";
import * as actions from "../../actions/Header";
import { connect } from "react-redux";

function Home(props) {
  useEffect(() => {
    props.setHeaderStatus(true);
    props.setFooterStatus(true);
  }, []);
  return (
    <div>
      <HomeComponent />
    </div>
  );
}

export default connect(
  null,
  actions
)(Home);
