import {getAuthUserDataThunkAC} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";

let initialState = {
    initialized: false,
};
let appReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

    export const initializedSuccessAC = () => {
        return {
            type: "SET_INITIALIZED_SUCCESS",
        }
    }
    export const initializeAppThunkAC = () => (dispatch) => {
        let promise = dispatch(getAuthUserDataThunkAC());
        debugger
        //dispatch(somethingelse());
        //dispatch(somethingelse());
        promise.then(() => {
            dispatch(initializedSuccessAC());
        });
    }

export default appReducer;