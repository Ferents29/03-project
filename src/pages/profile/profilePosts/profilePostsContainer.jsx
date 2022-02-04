import React from 'react';
import {addPostThemeAC, onPostThemeChangeAC} from "../../../redux/profile-reducer";
import ProfilePosts from "./profilePosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostThemeAC());
        },
        onTextChange: (textPostChange,textThemeChange) => {
            dispatch(onPostThemeChangeAC(textPostChange,textThemeChange));
        },
    };
}
const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)
export default ProfilePostsContainer;