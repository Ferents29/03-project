import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return <div className="col-md-3">
        <h1>Ввійти в аккаунт</h1>
        <Form onSubmit="handleSubmit">
            <Form.Label>Введіть Ваш Login</Form.Label><br/>
            <Field name="login"
                   type="text"
                   component={Input}
                   validate={[required]}
                   placeholder="Введіть Ваш Login" /><br/><br/>
            <Form.Label>Введіть Ваш пароль</Form.Label><br/>
            <Field name="password"
                   type="password"
                   component={Input}
                   validate={[required]}
                   placeholder="Введіть Ваш пароль" /><br/>
            <Form.Label>Запам'ятати мене.</Form.Label><br/>
            <Field name="rememberMe"
                   type="checkbox"
                   component={"checkbox"} /><br/>
            <Button variant="outline-primary" type="submit">
                Ввійти
            </Button>
        </Form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const onSubmit = (formData) => {
    console.log(formData);
}

const Login = (props) => {
    return <div>
        <Container>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Container>
    </div>
}

export default Login;