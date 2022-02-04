import React from "react";
import {Button, Container, Form} from "react-bootstrap";

const Login = (props) => {
    return <div>
        <Container>
            <div className="col-md-3">
                <h1>Ввійти в аккаунт</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введіть Ваш Email</Form.Label>
                        <Form.Control type="email" placeholder="Введіть Ваш Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Введіть Ваш пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введіть Ваш пароль" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запам'ятати мене" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Ввійти
                    </Button>
                </Form>
            </div>
        </Container>
    </div>
}
export default Login;