import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthorizedUserThunkCreator, logoutUserThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthorizedUserThunkCreator();
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,
    {getAuthorizedUserThunkCreator, logoutUserThunkCreator})(HeaderContainer);