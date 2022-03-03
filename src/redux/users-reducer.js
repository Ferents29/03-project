import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    sizePage:10,
    totalUsersCount:1000,
    currentPage:null,
    isFetching:false,
    followingInProgress: [],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId){
                        return  {...u,followed:true}
                    }
                    return u}),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId){
                        return  {...u,followed:false}
                    }
                    return u}),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: action.users,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.numberPage,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount,
            }
        }

        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            }
        }
        default:
            return state;
    }
}

    export const followAC = (userId) => {
        return {
            type:'FOLLOW',
            userId:userId,
        }
    }
    export const unfollowAC = (userId) => {
        return {
            type:'UNFOLLOW',
            userId:userId,
        }
    }
    export const setUsersAC = (users) => {
        return {
            type:'SET_USERS',
            users:users,
        }
    }
    export const setCurrentPageAC = (numberPage) => {
        return {
            type: "SET_CURRENT_PAGE",
            numberPage: numberPage,
        }
    }
    export const setTotalUsersCountAC = (usersCount) => {
        return {
            type: "SET_TOTAL_USERS_COUNT",
            usersCount: usersCount,
        }
    }
    export const toggleIsFetchingAC = (isFetching, userId) => {
        return {
            type: "TOGGLE_IS_FETCHING",
            isFetching: isFetching,
            userId: userId,
        }
    }
    export const toggleFollowingProgressAC = (isFetching) => {
        return {
            type: "TOGGLE_FOLLOWING_PROGRESS",
            isFetching: isFetching,
        }
    }
    export const getUsersThunkCreatorAC = (currentPage, sizePage) => async (dispatch) => {
            dispatch(toggleIsFetchingAC(true));
            let data = await usersAPI.getUsers(currentPage, sizePage);
                    dispatch(setUsersAC(data.items));
                    dispatch(setTotalUsersCountAC(data.totalCount));
                    dispatch(toggleIsFetchingAC(false));
        }

        const followUnfollowThunkAC = async (userId, dispatch, apiMethod, actionCreator) => {
            dispatch(toggleFollowingProgressAC(true, userId));
            let response = await apiMethod(userId);
            if (response.data.resultCode === 0){
                dispatch(actionCreator(userId));
            }
            dispatch(toggleFollowingProgressAC(false, userId));
        }

    export const followThunkAC = (userId) => async (dispatch) => {
        let {apiMethod, actionCreator} = [usersAPI.follow.bind(usersAPI), followAC];
            await followUnfollowThunkAC(userId, dispatch, apiMethod, actionCreator);
        }
    export const unfollowThunkAC = (userId) => async (dispatch) => {
        let {apiMethod, actionCreator} = [usersAPI.unfollow.bind(usersAPI), unfollowAC];
            await followUnfollowThunkAC(userId, dispatch, apiMethod, actionCreator);
        }

export default usersReducer;