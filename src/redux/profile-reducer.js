import {profileAPI, usersAPI} from "../api/api";

const ADD_POST_THEME = 'ADD-POST-THEME';
const ON_POST_THEME_CHANGE = 'ON-POST-THEME-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
                theme: state.newTextTheme,
                message: state.newTextPost,
                countLikes: 1000,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                textPostChange: "",
                textThemeChange: "",
            }
        }
        case ON_POST_THEME_CHANGE: {
            return {
                ...state,
                newTextPost:action.textPostChange,
                newTextTheme:action.textThemeChange,
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

    export const addPostThemeAC = () => {
        return {
            type:'ADD-POST-THEME',
        }
    }
export const setUserProfileAC = (profile) => {
    return {
        type:'SET_USER_PROFILE',
        profile: profile,
    }
}
    export const onPostThemeChangeAC = (textPostChange,textThemeChange) => {
        return {
            type:'ON-POST-THEME-CHANGE',
            textPostChange:textPostChange,
            textThemeChange:textThemeChange,
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