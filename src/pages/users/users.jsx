import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./user";
import {Container} from "react-bootstrap";

let Users = (props) => {
        return (
            <Container>
                <h1>Users page</h1>
                {props.usersData.map(u => <User user={u}
                                                followingInProgress={props.followingInProgress}
                                                unfollow={props.unfollow}
                                                follow={props.follow}/> )}
                <Paginator totalUsersCount={props.totalUsersCount}
                           sizePage={props.sizePage}
                           onPageChange={props.onPageChange}/>
            </Container>
        )

}
export default Users;