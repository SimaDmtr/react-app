import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreated} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) =>{
            dispatch(updateNewPostTextActionCreated(text))
        },
        addPost: () =>{
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;