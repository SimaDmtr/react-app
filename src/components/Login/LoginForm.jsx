import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={'email'} placeholder={'Email'} component={'input'}/>
            </div>
            <div>
                <Field type="text" name={'password'} placeholder={'password'} component={'input'}/>
            </div>
            <div>
                <label>
                    <Field  type="checkbox" name={'rememberMe'} component={'input'}/> Remember me
                </label>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;