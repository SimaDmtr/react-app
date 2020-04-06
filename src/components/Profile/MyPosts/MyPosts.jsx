import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(post => <Post message={post.message} like_counts={post.like_counts}/>)

    let newPostElement = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let updatedText = newPostElement.current.value;
        props.updateNewPostText(updatedText);
    };


    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;