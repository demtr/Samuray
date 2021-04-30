import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

// Добавили функционал redirect на страницу login в случае неавторизованного
// пользователя с применением ф-ции HOC
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>;
            return <Component {...this.props}/>;
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}