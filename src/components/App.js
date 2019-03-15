import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import routes from "../routes";

function App(props) {
  return (
    <div className="customContainer">
      <BrowserRouter>
        <>
          {props.header.showHeader && <Header />}
          <Switch>
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.id}
                exact={route.exact && true}
              />
            ))}
          </Switch>
          {props.header.showFooter && <Footer />}
        </>
      </BrowserRouter>
    </div>
  );
}

export default connect(({ header }) => ({ header }))(App);
