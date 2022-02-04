import React from 'react';
import {Col, Row, Tab, Form, Button, Nav} from "react-bootstrap";

function Sonnet() {
    return null;
}

const Dialogs = (props) => {
    let addTextMessage = () => {
        props.addTextMessage();
    }
    let onTextMessageChange = (e) => {
        let textMessageChange = e.target.value;
        props.onTextMessageChange(textMessageChange);
    }

    let dialogsElement = props.state.dialogsPage.dialogsData.map((dialog) => {
        return <Nav.Item>
            <Nav.Link eventKey={dialog.id}>{dialog.name}</Nav.Link>
        </Nav.Item>});

    let messagesElement = props.state.dialogsPage.messageData.map((message) => {
        return <Tab.Pane eventKey={message.id}>
            <Sonnet />
            {message.messageBody}
        </Tab.Pane>
    });

        return (
        <div className='container mt-4'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {dialogsElement}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {messagesElement}
                        </Tab.Content>

                        {/*Add Message Form*/}
                        <Col className="col-sm-5 mt-5">
                            {messagesElement}
                            <Form className="mt-3">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Введіть текст Вашого повідомлення</Form.Label>
                                    <Form.Control onChange={onTextMessageChange}
                                                  as="textarea"
                                                  value={props.state.dialogsPage.newTextMessage}
                                                  rows={3} />
                                </Form.Group>
                                <Button onClick={addTextMessage} className="primary">Надіслати повідомлення</Button>
                            </Form>
                        </Col>
                        {/*End Add Message Form*/}

                    </Col>
                </Row>
            </Tab.Container>
        </div>
        )
}
export default Dialogs;