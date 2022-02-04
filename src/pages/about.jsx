import React, {Component} from 'react';
import {Tab, Col, Nav, Row} from "react-bootstrap";
import a from "../assets/1.png";
import b from "../assets/2.jpg";
import c from "../assets/3.png";
import d from "../assets/5.jpg";
import e from "../assets/4.jpg";
import f from "../assets/6.png";

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="m-3">
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Верстка</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Языки программирования</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Фреймворки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Библиотеки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Утылиты</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Иное</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>
                                        <img src={a}/>
                                    </div>
                                    <p className="mt-3">bfghf fhfhg fghfgh gfhgf </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        <img src={b}/>
                                    </div>
                                    <p className="mt-3">45 54545 5454 54623 236989 3  26 56 5</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div>
                                        <img src={c}/>
                                    </div>
                                    <p className="mt-3">45 54545 5454 54623 236989 3  26 56 5</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <div>
                                        <img src={d}/>
                                    </div>
                                    <p className="mt-3">45 54545 5454 54623 236989 3  26 56 5</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <div>
                                        <img src={e}/>
                                    </div>
                                    <p className="mt-3">45 54545 5454 54623 236989 3  26 56 5</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <div>
                                        <img src={f}/>
                                    </div>
                                    <p className="mt-3">45 54545 5454 54623 236989 3  26 56 5</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}