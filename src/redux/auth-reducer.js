import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}

    export const setUserDataAC = (id,login,email) => {
        return {
            type: "SET_USER_DATA",
            data:{id,login,email},
        }
    }
    export const authThunkAC = () => {
        return (dispatch) => {
            authAPI.me().then(response => {
                if(response.data.resultCode === 0){
                    let {id,login,email} = response.data.data;
                    dispatch(setUserDataAC(id,login,email));
                }
                // else {
                //     alert(response.data.messages);
                // }
            });
        }
    }
export default authReducer;