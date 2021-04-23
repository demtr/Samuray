import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";
import {userApi} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        userApi.isAuthorized()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data; // деструктурирующее присваивание
                    this.props.setAuthUser(id, email, login);
                }
            });
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

export default connect(mapStateToProps,{setAuthUser})(HeaderContainer);