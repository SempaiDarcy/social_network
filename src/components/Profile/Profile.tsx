import React, { useRef } from "react";
import { Post } from "../Post/Post";
import s from "./Profile.module.css";
import {AddPostAT, ChangeTextAT, PostType} from "../../redux/state";

type ProfilePeropsType = {
  posts: PostType[];
  addPost: (action:AddPostAT|ChangeTextAT) => void;
};
export const Profile = (props: ProfilePeropsType) => {
  const postsElements = props.posts.map((el) => {
    return <Post message={el.message} likes={el.likes} />;
  });

  const newPostElement = useRef<HTMLTextAreaElement>(null);
  const addPost = () => {
    let text = newPostElement.current?.value;
    console.log(text)
    if (text !== undefined) props.addPost({type:"ADD-POST",postText:text});
  };
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
          {/* <Post message="Hi" likes="1" />
          <Post message="How are u" likes="2" />
          <Post message="I am fine" likes="3" />
          <Post message="It is ok" likes="4" /> */}
        </div>
      </div>
    </div>
  );
};
