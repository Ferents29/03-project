import React from 'react';
import Users from "./users";
import {connect} from "react-redux";
import {
    followAC, followThunkAC, getUsersThunkCreatorAC,
    setCurrentPageAC,
    toggleIsFetchingAC,
    unfollowAC, unfollowThunkAC
} from "../../redux/users-reducer";
import Preloader from "../../common/Preloader/preloader";
import {compose} from "redux";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.state.usersPage.currentPage, this.props.state.usersPage.sizePage)
    }
    onPageChange = (numberPage) => {
        this.props.getUsersThunkCreator(numberPage, this.props.state.usersPage.sizePage);
    }
    render() {
        return <>
             {/*Якщо в нас this.props.state.usersPage.isFetching == true, то відображається Preloader,*/}
             {/*в іншому випадку рендериться компонента Users*/}

            {this.props.state.usersPage.isFetching ? <Preloader /> : (
                <Users state={this.props.state}
                       follow={this.props.follow}
                       followThunk={this.props.followThunk}
                       unfollowThunk={this.props.unfollowThunk}
                       unfollow={this.props.unfollow}
                       onPageChange={this.onPageChange}
                       toggleIsFetching={this.props.toggleIsFetching}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress} />
            )}
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        state:state,
        followingInProgress:state.usersPage.followingInProgress,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        // setUsers: (users) => {
        //     dispatch(setUsersAC(users));
        // },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageAC(numberPage));
        },
        // setTotalUsersCount: (usersCount) => {
        //     dispatch(setTotalUsersCountAC(usersCount));
        // },
        // toggleIsFetching: (isFetching) => {
        //     dispatch(toggleIsFetchingAC(isFetching));
        // },
        toggleFollowingProgress: (isFetching, userId) => {
            dispatch(toggleIsFetchingAC(isFetching, userId));
        },
        getUsersThunkCreator: (currentPage, sizePage) => {
            dispatch(getUsersThunkCreatorAC(currentPage, sizePage));
        },
        followThunk: (userId) => {
            dispatch(followThunkAC(userId));
        },
        unfollowThunk: (userId) => {
            dispatch(unfollowThunkAC(userId));
        },
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(UsersContainer);