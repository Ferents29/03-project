import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {maxLengthThunkAC, minLengthThunkAC, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../common/FormsControl/FormsControl";

const maxLengthThunkAC20 = maxLengthThunkAC(20);
const minLengthThunkAC2 = minLengthThunkAC(2);

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <span>Тема поста</span><br/>
                <Field name="newThemeText" component={"input"}/><br/>
            <span>Пост</span><br/>
                <Field name="newPostText"
                       component={TextArea}
                       placeholder="Введіть Ваш пост"
                       validate={[
                           required,
                           maxLengthThunkAC20,
                           minLengthThunkAC2,
                       ]}/><br/>
            <button>Надіслати</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

const ProfilePosts = React.memo((props) => {

    let addPost = (values) => {
        props.addPost(values.newThemeText, values.newPostText);
    }

    let postsElement = props.postsData.map((post) => {
        return <div className="m-3">
            <span>{post.theme}</span><br/>
            {post.id + '. '}{post.message}<br/>
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
});

export default ProfilePosts;