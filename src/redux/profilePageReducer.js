import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {
            message: "Hi, how are you?",
            like_counts: "15"
        },
        {
            message: "It's my first post",
            like_counts: "20"
        }
    ],
    newPostText: "Write here...",
    profile: null,
    status: ''
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    like_counts: 0
                }]
            };
        }
        case ADD_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.updatedText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile : action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status : action.status
            };
        }
        default: {
            return state
        }
    }

};
export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText}
};

export const updateNewPostTextActionCreated = (updatedText) => {
    return {
        type: ADD_NEW_POST_TEXT,
        updatedText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};
export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
};
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
};

export const getUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.getUserStatus(status)
            .then(data => {
                dispatch(setUserStatus(data))
            })
    }
};
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                data.resultCode === 0 &&
                dispatch(setUserStatus(status))
            })
    }
};



export default profilePageReducer;