import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const AUTH_SET_USER_DATA = 'AUTH_SET_USER_DATA';

let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:true,
};
let authReducer = (state = initialState,action) => {
    switch (action.type) {
        case AUTH_SET_USER_DATA: {
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
            type: "AUTH_SET_USER_DATA",
            payload:{id,login,email,isAuth},
        }
    }
    export const getAuthUserDataThunkAC = () => async (dispatch) => {
               let response = await authAPI.me();
               if(response.data.resultCode === 0){
                    let {id,login,email} = response.data.data;
                    dispatch(setUserDataAC(id,login,email,true));
                }
        }

    export const loginThunkAC = (email, password, rememberMe) => async (dispatch) => {
            let response = await authAPI.login(email, password, rememberMe);
                if(response.data.resultCode === 0){
                    dispatch(getAuthUserDataThunkAC());
                }else {
                    let message = response.data.messages.length > 0
                        ? response.data.messages[0]
                        : "Some error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
        }
    export const logoutThunkAC = () => async (dispatch) => {
           let response = await authAPI.logout();
                if (response.data.resultCode === 0){
                    dispatch(setUserDataAC(null,null,null,false));
                }
        }
export default authReducer;