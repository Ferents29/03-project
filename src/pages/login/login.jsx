import React from "react";
import {Container} from "react-bootstrap";
import {LoginForm} from "./loginForm";
import {reduxForm} from "redux-form";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const onSubmit = (formData) => {
    console.log("formData");
}

const Login = (props) => {
    return <div>
        <Container>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Container>
    </div>
}

export default Login;