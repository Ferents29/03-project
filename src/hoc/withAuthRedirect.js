import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authPage.isAuth,
    }
}
export const withAuthRedirect = (Component) => {
    class AuthRedirect extends React.Component {
        render() {
            if(! this.props.isAuth) return <Redirect to="login" />;
            return <Component {...this.props}/>;
        }
    }
    let connectedWithAuthRedirect = connect(mapStateToPropsForRedirect)(AuthRedirect);
    return connectedWithAuthRedirect;
}