import React from "react";
import {Button, Form} from "react-bootstrap";
import {Field} from "redux-form";

export const LoginForm = (props) => {
    return <div className="col-md-3">
        <h1>Ввійти в аккаунт</h1>
        <form>
            <label>Введіть Ваш Login</label><br/>
                <Field name="login" type="text"
                       component={"input"}
                       placeholder="Введіть Ваш Login" /><br/><br/>
            <label>Введіть Ваш пароль</label><br/>
                <Field type="password"
                       component={"input"}
                       placeholder="Введіть Ваш пароль" /><br/>
                <field type="checkbox" component={"input"} label="Запам'ятати мене" /><br/>
            <Button variant="outline-primary" type="submit">
                Ввійти
            </Button>
        </form>
    </div>
}