import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUserThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
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

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => {dispatch(logoutUserThunkCreator())}
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);