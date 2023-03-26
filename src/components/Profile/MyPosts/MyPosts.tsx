import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";
import {ProfileUsers} from "../../../redux/profilePage-reducer";

type MyPostsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: ProfilePageType
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile:ProfileUsers
}

const MyPosts = (props: MyPostsType) => {
    const {updateNewPostText, addPost, posts} = props
    let newText = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newText.current?.value?.trim() !== '') {
            addPost()
        } else {
            updateNewPostText('')
        }
    }

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget?.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newText} value={posts.newPostText} onChange={onChangeTextarea}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={posts.posts}/>
            </div>
        </div>
    );
};

export default MyPosts;