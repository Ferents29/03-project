import React, {Component} from 'react';
import {FloatingLabel, Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <div className="col-4 m-4 p-4">
                <h3>Свяжытесь с нами</h3>
                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <div className="mt-3">
                    <Button className="bg-success">Отправить</Button>
                </div>
            </div>
        )
    }
}