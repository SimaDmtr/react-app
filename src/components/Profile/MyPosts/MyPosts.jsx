import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(post => <Post message={post.message} like_counts={post.like_counts}/>)
    
    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    };

    return (
        <div>
            My posts
            <AddNewPostRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your message'}/>
            <button>Add post</button>
        </form>
    )
}

const AddNewPostRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;