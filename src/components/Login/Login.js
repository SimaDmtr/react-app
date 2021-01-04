import React from "react";
import LoginForm from "./LoginForm";
import {signIn} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.signIn(formData.email, formData.password, formData.rememberMe, null);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>;
    }

    return (
        <Container className={'h-100 w-100 align-items-center d-flex justify-content-lg-center'}>
            <Row className={'w-50'}>
                <Col>
                    <Card>
                        <Card.Header as="h5">Sign In</Card.Header>
                        <LoginForm onSubmit={onSubmit}/>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {signIn})(Login);
