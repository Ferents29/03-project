import React from 'react';
import {Col, Button, Container, Form, Row} from "react-bootstrap";

const ProfilePosts = (props) => {

    let textPostObject = React.createRef();
    let textThemeObject = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    let onTextChange = () => {
        let textPostChange = textPostObject.current.value;
        let textThemeChange = textThemeObject.current.value;
        props.onTextChange(textPostChange,textThemeChange);
    }

       let postsElement = props.state.profilePage.postsData.map((post) => {
           return <div className="m-3">
                     <span>{post.theme}</span><br/>
                     {post.id+'. '}{post.message}<br/>
                     <span><a href="">Лайк:</a>{post.countLikes}</span>
                  </div>
          });

        return (
            <div>
                <Container>
                    <h1>Мої пости</h1>
                    <div className="col-md-5 m-3">
                        {postsElement}
                    </div>
                    <Row>
                        <Col className="col-md-4">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Тема поста</Form.Label>
                                    <Form.Control onChange={onTextChange}
                                                  ref={textThemeObject}
                                                  type="text"
                                                  value={props.state.profilePage.newTextTheme}
                                                  placeholder="Тема поста" />
                                </Form.Group>
                                <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Пост</Form.Label>
                                    <Form.Control onChange={onTextChange}
                                                  ref={textPostObject}
                                                  as="textarea"
                                                  value={props.state.profilePage.newTextPost}
                                                  rows={3} />
                                </Form.Group>
                                <Button onClick={addPost}>Надіслати</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default ProfilePosts;