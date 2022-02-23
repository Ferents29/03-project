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
import {
    getFollowingInProgress,
    getIsFetching,
    getSizePage,
    getTotalUsersCount,
    getUsersData
} from "../../redux/users-selectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.sizePage)
    }
    onPageChange = (numberPage) => {
        this.props.getUsersThunkCreator(numberPage, this.props.sizePage);
    }
    render() {
        return <>
             {/*Якщо в нас this.props.state.usersPage.isFetching == true, то відображається Preloader,*/}
             {/*в іншому випадку рендериться компонента Users*/}

            {this.props.isFetching ? <Preloader /> : (
                <Users totalUsersCount={this.props.totalUsersCount}
                       sizePage={this.props.sizePage}
                       usersData={this.props.usersData}
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

// let mapStateToProps = (state) => {
//     return {
//         totalUsersCount:state.usersPage.totalUsersCount,
//         isFetching:state.usersPage.isFetching,
//         sizePage:state.usersPage.sizePage,
//         usersData:state.usersPage.usersData,
//         followingInProgress:state.usersPage.followingInProgress,
//     }
// }
let mapStateToProps = (state) => {
    return {
        totalUsersCount:getTotalUsersCount(state),
        isFetching:getIsFetching(state),
        sizePage:getSizePage(state),
        usersData:getUsersData(state),
        followingInProgress:getFollowingInProgress(state),
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