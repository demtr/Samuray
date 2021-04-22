import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then((response) => {
                console.log(response.data.resultCode);
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data; // деструктурирующее присваивание
                    this.props.setAuthUser(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{setAuthUser})(HeaderContainer);