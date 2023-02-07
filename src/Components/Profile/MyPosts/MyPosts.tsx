import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsType = {
    posts:PostsType[]
}
const MyPosts = (props:MyPostsType) => {

    let postsElements = props.posts.map(el=>{
        return <Post message={el.message} likesCount={el.likesCount}/>
    })
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;