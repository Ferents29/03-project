import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <span>Тема поста</span><br/>
                <Field name="newThemeText" component={"input"}/><br/>
            <span>Пост</span><br/>
                <Field name="newPostText" component={"textarea"}/><br/>
            <button>Надіслати</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

const ProfilePosts = (props) => {

    let addPost = (values) => {
        props.addPost(values.newThemeText, values.newPostText);
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
                            <AddNewPostFormRedux onSubmit={addPost}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default ProfilePosts;