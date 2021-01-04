import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          name={"email"}
          placeholder={"Email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type="text"
          name={"password"}
          placeholder={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <label>
          <Field type="checkbox" name={"rememberMe"} component={Input} />{" "}
          Remember me
        </label>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
