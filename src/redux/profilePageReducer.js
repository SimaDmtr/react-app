const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';
let initialState = {
    posts: [
        {message: "Hi, how are you?", like_counts: "15"},
        {message: "It's my first post", like_counts: "20"}
    ],
    newPostText: "Write here..."
};
const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like_counts: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.updatedText;
            break;
    }
    return state;
};
export const addPostActionCreator = () => {
    return {type: ADD_POST}
};

export const updateNewPostTextActionCreated = (updatedText) => {
    return {type: ADD_NEW_POST_TEXT, updatedText: updatedText}
};
export default profilePageReducer;