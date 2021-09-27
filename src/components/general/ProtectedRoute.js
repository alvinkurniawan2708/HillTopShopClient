import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, auth, ...rest})=>(
    <Route
        {...rest} render={props=>auth.isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/>}
    />
)

const mapStateToProps = (state) =>({
    auth: state.auth,
});

export default connect(mapStateToProps)(ProtectedRoute);