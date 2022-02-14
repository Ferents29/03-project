import React from 'react';
import {addPostThemeAC} from "../../../redux/profile-reducer";
import ProfilePosts from "./profilePosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newThemeText, newPostText) => {
            dispatch(addPostThemeAC(newThemeText, newPostText));
        },
    };
}
const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)
export default ProfilePostsContainer;