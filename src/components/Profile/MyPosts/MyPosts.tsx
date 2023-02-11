import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";


export type MyPostsType = {
    posts: PostType[]
    newPostText: string
}
type MyPostsDispatchType = {
    dispatch: (action: any) => void
    postType: MyPostsType
}


const MyPosts = (props: MyPostsDispatchType) => {
    let newText = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newText.current?.value?.trim() !== '') {
            props.dispatch(addPostActionCreator())
        }
    }

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newText.current?.value
        if (text){
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newText} value={props.postType.newPostText} onChange={onChangeTextarea}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={props.postType.posts}/>
            </div>
        </div>
    );
};

export default MyPosts;