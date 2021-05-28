import {Field, reduxForm} from 'redux-form';
import {loginUserThunkCreator} from "../../redux/authReducer";
import {Input} from "../common/FormControls";
import {required} from "../common/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field type="text" name="email" component={Input}
                    validate={[required]} placeholder="login"/></div>
        <div><Field type="password" name="password" component={Input}
                    validate={[required]} placeholder="password"/></div>
        <div><Field type="checkbox" name="rememberMe" component={Input}/>запомнить</div>
        {error && <div className={style.errDiv}><span className={style.error}>{error}</span></div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const ReduxFormLogin = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm);

const Login = (props) => {
    const mySubmit = (formData) => {
        props.loginUserThunkCreator(formData);
    };

    if (props.isAuth) return <Redirect to="/" />

    return <div><h2>Login</h2>
        <ReduxFormLogin onSubmit={mySubmit}/></div>
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginUserThunkCreator})(Login);