const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    profile: null
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
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
        default: {
            return state
        }
    }

};
export const addPostActionCreator = () => {
    return {type: ADD_POST}
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
export default profilePageReducer;