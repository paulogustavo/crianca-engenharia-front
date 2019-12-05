import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Inicio from "./pages/Inicio";
import AddEvento from "./pages/AddEvento";
import ViewEvento from "./pages/ViewEvento";
import AddEscola from "./pages/AddEscola";
import ViewEscolas from "./pages/ViewEscolas";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <SignIn />} />
      <Route path="/signup" component={() => <SignUp />} />
      <PrivateRoute path="/app" component={() => <Inicio />} />
      <PrivateRoute path="/addevento" component={() => <AddEvento />} />
      <PrivateRoute path="/evento/:id" component={ViewEvento} />} />
      <PrivateRoute path="/addescola" component={() => <AddEscola />} />
      <PrivateRoute path="/escolas" component={() => <ViewEscolas />} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
