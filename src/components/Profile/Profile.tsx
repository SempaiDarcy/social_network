import { Post } from "../Post/Post";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={s.posts}>
          <Post message="Hi" likes="1" />
          <Post message="How are u" likes="2" />
          <Post message="I am fine" likes="3" />
          <Post message="It is ok" likes="4" />
        </div>
      </div>
    </div>
  );
};
