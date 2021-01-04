import React from "react";
import LoginForm from "./LoginForm";
import { signIn } from "../../redux/authReducer";

class Login extends React.Component {
  onSubmit = (formData) => {
    signIn(formData.email, formData.password, formData.rememberMe, null);
  };
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Login;
