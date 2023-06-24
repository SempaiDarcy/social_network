import React, {ChangeEvent, useRef, useState} from "react";
import { Post } from "../Post/Post";
import s from "./Profile.module.css";
import {ActionsType, addPostAC, PostType} from "../../redux/store";

type ProfilePropsType = {
  posts: PostType[];
  dispatch: (action:ActionsType) => void;
};
export const Profile = (props: ProfilePropsType) => {
  const [postText,setPostText] = useState("")
  const postsElements = props.posts.map((el) => {
    return <Post message={el.message} likes={el.likes} />;
  });
  const newPostElement = useRef<HTMLTextAreaElement>(null);
  const addPost = () => {
    let text = newPostElement.current?.value;
    console.log(text)
    if (text !== undefined) {
      props.dispatch(addPostAC(text))
      setPostText("")
    }
  }
  const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value)
  }
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <div>
            <textarea
                ref={newPostElement}
                value={postText}
                onChange={onPostChange}
                placeholder="Enter your post"></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
};
