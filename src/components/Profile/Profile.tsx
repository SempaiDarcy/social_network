import { PostType } from "../../App";
import { Post } from "../Post/Post";
import s from "./Profile.module.css";

type ProfilePeropsType = {
  posts: PostType[];
};
export const Profile = (props: ProfilePeropsType) => {
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={s.posts}>
          {props.posts.map((el) => {
            return <Post message={el.message} likes={el.likes} />;
          })}
          {/* <Post message="Hi" likes="1" />
          <Post message="How are u" likes="2" />
          <Post message="I am fine" likes="3" />
          <Post message="It is ok" likes="4" /> */}
        </div>
      </div>
    </div>
  );
};
