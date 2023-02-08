import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}
const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(el => {
        return <Post message={el.message} likesCount={el.likesCount}/>
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;