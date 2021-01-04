import React from 'react';
import {addPostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MapStateToProps = (state) =>{
    return{
        posts: state.profilePage.posts,
    }
}

const MapDispatchToProps = (dispatch) =>{
    return{
        addPost: (newPostText) =>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;