import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkAC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../../common/FormsControl/FormsControl.module.css";

const LoginForm = (props) => {
    return <div className="col-md-3">
        <h1>Ввійти в аккаунт</h1>
        <Form onSubmit={props.handleSubmit}>
            <Form.Label>Введіть Ваш Login</Form.Label><br/>
            <Field name="email"
                   type="text"
                   component={Input}
                   validate={[required]}
                   placeholder="Введіть Ваш Email" /><br/><br/>
            <Form.Label>Введіть Ваш пароль</Form.Label><br/>
            <Field name="password"
                   type="password"
                   component={Input}
                   validate={[required]}
                   placeholder="Введіть Ваш пароль" /><br/>
            <Form.Label>Запам'ятати мене</Form.Label>
            <Field name="rememberMe"
                   type="checkbox"
                   component={Input} /><br/>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <Button variant="outline-primary" type="submit">
                Ввійти
            </Button>
        </Form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.setLogin(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div>
        <Container>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Container>
    </div>
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (email, password, rememberMe) => {
            dispatch(loginThunkAC(email, password, rememberMe));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);