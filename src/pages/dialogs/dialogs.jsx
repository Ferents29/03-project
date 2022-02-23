import React from 'react';
import {Col, Row, Tab, Nav} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";

function Sonnet() {
    return null;
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span>Введіть текст Вашого повідомлення</span>
            <Field component={"textarea"}
                   name="newMessageBody"
                   placeholder="Enter Your message" /><br/>
            <button>Надіслати повідомлення</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map((dialog) => {
        return <Nav.Item>
            <Nav.Link eventKey={dialog.id}>{dialog.name}</Nav.Link>
        </Nav.Item>});

    let messagesElement = props.messageData.map((message) => {
        return <Tab.Pane eventKey={message.id}>
            <Sonnet />
            {message.messageBody}
        </Tab.Pane>
    });

    let addNewMessage = (values) => {
        props.addTextMessage(values.newMessageBody);
    }
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
                            <AddMessageFormRedux onSubmit={addNewMessage} />
                        </Col>
                        {/*End Add Message Form*/}

                    </Col>
                </Row>
            </Tab.Container>
        </div>
        )
    }

export default Dialogs;