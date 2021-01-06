import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth},
});

export const getAuthUsersData = () => {
    return (dispatch) => {
        return authAPI.getAuth().then((data) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    };
};
export const signIn = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.signIn(email, password, rememberMe, captcha).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUsersData());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Incorrect email or password';
            dispatch(stopSubmit('login', {_error: message}))
        }
    });
};

export const signOut = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.signOut(email, password, rememberMe, captcha).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};
export default authReducer;
