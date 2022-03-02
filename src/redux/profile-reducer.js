import {profileAPI, usersAPI} from "../api/api";

const ADD_POST_THEME = 'ADD-POST-THEME';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id:1,theme:'Theme 1',message:"Its my first message",countLikes:10},
        {id:2,theme:'Theme 2',message:"Its my second message",countLikes:100},
        {id:3,theme:'Theme 3',message:"Its my third message",countLikes:1000},
        {id:4,theme:'Theme 4',message:"Its my fourth message",countLikes:10000},
        {id:5,theme:'Theme 5',message:"Its my fifth message",countLikes:100000},
    ],
    newTextPost: "",
    newTextTheme: "",
    profile: null,
    status: "",
};
let profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST_THEME: {
            let newPost = {
                id: 6,
                theme: action.newThemeText,
                message: action.newPostText,
                countLikes: 1000,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                textPostChange: "",
                textThemeChange: "",
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId),
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}

    export const addPostThemeAC = (newThemeText, newPostText) => {
        return {
            type:'ADD-POST-THEME',
            newThemeText,
            newPostText,
        }
    }
    export const deletePostAC = (postId) => {
        return {
            type:'DELETE_POST',
            postId,
        }
    }
    export const setUserProfileAC = (profile) => {
        return {
            type:'SET_USER_PROFILE',
            profile: profile,
        }
    }
    export const setStatusAC = (status) => {
        return {
            type:'SET_STATUS',
            status:status,
        }
    }
    export const getProfileThunkAC = (userId) => {
        return (dispatch) => {
            usersAPI.getProfile(userId).then(response => {
                dispatch(setUserProfileAC(response.data));
            });
        }
    }
    export const getStatusThunkAC = (userId) => {
        return (dispatch) => {
            profileAPI.getStatus(userId).then(response => {
                dispatch(setStatusAC(response.data));
            });
        }
    }
    export const updateStatusThunkAC = (status) => {
        return (dispatch) => {
            profileAPI.updateStatus(status).then(response => {
                /*if(response.data.resultCode === 0){*/
                    dispatch(setStatusAC(status));
                /*}*/
            });
        }
    }
    export default profileReducer;