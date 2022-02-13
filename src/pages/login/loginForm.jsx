import React from "react";
import {Button, Form} from "react-bootstrap";
import {Field} from "redux-form";

export const LoginForm = (props) => {
    return <div className="col-md-3">
        <h1>Ввійти в аккаунт</h1>
        <Form onSubmit="handleSubmit">
            <Form.Label>Введіть Ваш Login</Form.Label><br/>
                <Field name="login"
                       type="text"
                       component={"input"}
                       placeholder="Введіть Ваш Login" /><br/><br/>
            <Form.Label>Введіть Ваш пароль</Form.Label><br/>
                <Field name="password"
                       type="password"
                       component={"input"}
                       placeholder="Введіть Ваш пароль" /><br/>
            <Form.Label>Запам'ятати мене.</Form.Label><br/>
                <Field name="rememberMe"
                       type="checkbox"
                       component={"input"} /><br/>
            <Button variant="outline-primary" type="submit">
                Ввійти
            </Button>
        </Form>
    </div>
}