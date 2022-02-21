import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
};
let authReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

    export const setUserDataAC = (id,login,email,isAuth) => {
        return {
            type: "SET_USER_DATA",
            payload:{id,login,email,isAuth},
        }
    }
    export const getAuthUserDataThunkAC = () => {
        return (dispatch) => {
            authAPI.me().then(response => {
                if(response.data.resultCode === 0){
                    let {id,login,email} = response.data.data;
                    dispatch(setUserDataAC(id,login,email,true));
                }
            });
        }
    }
    export const loginThunkAC = (email, password, rememberMe) => (dispatch) => {
            authAPI.login(email, password, rememberMe).then(response => {
                if(response.data.resultCode === 0){
                    dispatch(getAuthUserDataThunkAC());
                }else {
                    let message = response.data.messages.length > 0
                        ? response.data.messages[0]
                        : "Some error";
                    dispatch(stopSubmit('login', {_error: message}));
                }
            });
        }
    export const logoutThunkAC = () => {
        return (dispatch) => {
            authAPI.logout().then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setUserDataAC(null,null,null,false));
                }
            });
        }
    }
export default authReducer;