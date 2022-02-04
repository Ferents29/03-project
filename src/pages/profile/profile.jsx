import React from 'react';
import {Container} from "react-bootstrap";
import ProfileInfo from "./profileInfo/profileInfo";
import ProfilePostsContainer from "./profilePosts/profilePostsContainer";

const Profile = (props) => {
    return (
            <div>
                <Container>
                    <ProfileInfo profile={props.profile}/>
                    <ProfilePostsContainer store={props.store} />
                </Container>
            </div>
        )
}

export default Profile;