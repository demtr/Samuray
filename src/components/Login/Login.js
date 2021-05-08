import {Field, reduxForm} from 'redux-form';
import {loginUserThunkCreator} from "../../redux/authReducer";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type="text" name="email" component="input" placeholder="login"/></div>
        <div><Field type="password" name="password" component="input" placeholder="password"/></div>
        <div><Field type="checkbox" name="rememberMe" component="input"/>запомнить</div>
        {/*<div><Field type="submit" name="submit" component="input" value="Login"/></div>*/}
        <div><button>Login</button></div>
    </form>
}

const ReduxFormLogin = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm);

const mySubmit = (formData) => {
    console.log(formData);
    loginUserThunkCreator(formData);
};

const Login = () => {
    return <div> <h2>Login</h2> <ReduxFormLogin onSubmit={mySubmit}/> </div>
};

export default Login;