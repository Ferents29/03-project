import React, {Component, useState} from 'react'
import {Container, Form, FormControl, Modal, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/home";
import Messages from "../pages/messages/messages";
import About from "../pages/about"
import Contacts from "../pages/contacts";
import DialogsContainer from "../pages/dialogs/dialogsContainer";
import UsersContainer from "../pages/users/usersContainer";
import ProfileContainer from "../pages/profile/profileContainer";
import Login from "../pages/login/login";

/*function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Реєстрація/Авторизація
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Реєстрація/Авторизація</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Вийти
                    </Button>
                    <Button variant="primary">
                        Підтвердити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}*/

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="danger" expand="lg">
                    <Container >
                        <Navbar.Brand href="/">Восьма лінія VTP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Button variant="outline-success"><Nav.Link href="/">Home</Nav.Link></Button>
                                <Button variant="outline-success"><Nav.Link href="/about">About us</Nav.Link></Button>
                                <Button variant="outline-success"><Nav.Link href="/dialogs">Dialogs</Nav.Link></Button>
                                <Button variant="outline-success"><Nav.Link href="/profile">Profile</Nav.Link></Button>
                                <Button variant="outline-success"><Nav.Link href="/messages">Messages</Nav.Link></Button>
                                <Button variant="outline-success"><Nav.Link href="/users">Users</Nav.Link></Button>
                                <Button variant="outline-success"><Nav.Link href="/contacts">Contacts</Nav.Link></Button>
                                <Button variant="outline-success">
                                <NavDropdown title="Others" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                </Button>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                    {this.props.isAuth
                        ? <div>{this.props.login}
                            <Nav>
                                <Button onClick={this.props.logOut}>
                                    Log out
                                </Button>
                            </Nav>
                        </div>
                        : <Nav>
                            <Button className="m-2" variant="outline-primary">
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Button>
                        </Nav>
                    }
                    {/*<Example />*/}

                </Navbar>

                <BrowserRouter>
                            <Route exact path="/" render={ () => <Home/>} />
                            <Route exact path="/about" render={ () => <About />} />
                            <Route exact path="/dialogs"
                                   render={ () => <DialogsContainer />} />
                            <Route path="/profile/:userId?"
                                   render={ () => <ProfileContainer />} />
                            <Route exact path="/messages" render={ () => <Messages />} />
                            <Route exact path="/users" render={ () => <UsersContainer /> } />
                            <Route exact path="/login"
                                   render={ () => <Login /> } />
                            <Route exact path="/contacts" render={ () => <Contacts />} />
                </BrowserRouter>
            </div>
        );

    }
}