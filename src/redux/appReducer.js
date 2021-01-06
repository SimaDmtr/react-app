import {getAuthUsersData} from "./authReducer";
import store from "./reduxStore";

const INIT_APP_SUCCESS = "INIT_APP_SUCCESS";

let initialState = {
    isInit: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP_SUCCESS:
            return {
                ...state,
                isInit: true
            };
        default:
            return state;
    }
};


export const isInitSuccess = () => ({type: INIT_APP_SUCCESS});
export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthUsersData())
    Promise.all([promise]).then(() => {
        dispatch(isInitSuccess())
    })
};
export default appReducer;
