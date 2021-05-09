import {Field, reduxForm} from 'redux-form';
import {loginUserThunkCreator} from "../../redux/authReducer";
import {Input} from "../common/FormControls";
import {required} from "../common/validators";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type="text" name="email" component={Input}
                    validate={[required]} placeholder="login"/></div>
        <div><Field type="password" name="password" component={Input}
                    validate={[required]} placeholder="password"/></div>
        <div><Field type="checkbox" name="rememberMe" component={Input}/>запомнить</div>
        <div><button>Login</button></div>
    </form>
}

const ReduxFormLogin = reduxForm({
    form: 'login' // a unique identifier for this form
})(LoginForm);

const mySubmit = (formData) => {
    loginUserThunkCreator(formData);
};

const Login = () => {
    return <div> <h2>Login</h2> <ReduxFormLogin onSubmit={mySubmit}/> </div>
};

export default Login;