import React from "react";
import {Field, reduxForm} from "redux-form";

import {required} from "../../utils/validators/validators";
import {Form, Card, Button, Alert} from "react-bootstrap";
import {CheckForm, FieldInput} from "../common/FormControls/FormsControls";

const LoginForm = (props) => {
    return (
        <Card.Body>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Field
                        type="text"
                        name={"email"}
                        placeholder={"Email"}
                        component={FieldInput}
                        validate={[required]}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Field
                        type="password"
                        name={"password"}
                        placeholder={"password"}
                        component={FieldInput}
                        validate={[required]}
                    />
                </Form.Group>
                <Form.Group>
                    <Field id="rememberMeCheck" type="checkbox" name={"rememberMe"} component={CheckForm}
                           label={'Remember me'}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    SIGN IN
                </Button>
                {props.error &&
                <Alert className={'mt-3'} variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        {props.error}
                    </p>
                </Alert>
                }
            </Form>
        </Card.Body>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

export default LoginReduxForm;
