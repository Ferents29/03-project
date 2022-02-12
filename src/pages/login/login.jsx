import React from "react";
import {Container} from "react-bootstrap";
import {LoginForm} from "./loginForm";
import {reduxForm} from "redux-form";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    return <div>
        <Container>
            <LoginReduxForm />
        </Container>
    </div>
}

export default Login;