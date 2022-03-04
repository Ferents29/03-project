import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkAC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../../common/FormsControl/FormsControl.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return <div className="col-md-3">
        <h1>Ввійти в аккаунт</h1>
        <Form onSubmit={handleSubmit}>
            {createField("Введіть Ваш Login","email", "text",
                Input, [required], "Введіть Ваш Email")}<br/><br/>

            {createField("Введіть Ваш пароль","password", "password",
                Input, [required], "Введіть Ваш пароль")}<br/><br/>

            {createField("Запам'ятати мене","rememberMe", "checkbox",
                Input, null, null)}<br/><br/>

            {error && <div className={style.formSummaryError}>
                {error}
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