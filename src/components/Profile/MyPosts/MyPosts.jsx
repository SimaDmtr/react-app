import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {
    maxLengthCreator,
    required,
} from "../../../utils/validators/validators";
import {PlainInput} from "../../common/FormControls/FormsControls";
import {Button, Form, InputGroup} from "react-bootstrap";

const maxLength30 = maxLengthCreator(30);

const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => (
        <Post message={post.message} like_counts={post.like_counts}/>
    ));
    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    };

    return (
        <div>
            My posts
            <AddNewPostRedux onSubmit={addNewPost}/>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <InputGroup className="mb-3">
                <Field
                    type={'text'}
                    component={PlainInput}
                    name={"newPostText"}
                    placeholder={"Enter your message"}
                    validate={[required, maxLength30]}
                />
                <InputGroup.Append>
                    <Button type={'submit'} variant="outline-secondary">Add post</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

const AddNewPostRedux = reduxForm({form: "profileAddNewPostForm"})(
    AddNewPostForm
);

export default MyPosts;
