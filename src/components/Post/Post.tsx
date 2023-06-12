import s from "./Post.module.css";

export type PropsType = {
  message: string;
  likes: string;
};
export const Post = (props: PropsType) => {
  return (
    <div className={s.post}>
      <img
        src="https://avatars.mds.yandex.net/i?id=1b423d69437bfdaff08a53402617e97ed457c044-7763867-images-thumbs&n=13"
        alt="avatar"
      />
      post 1
      <div>
        <span>{props.likes} Likes</span>
        <div>{props.message}</div>
      </div>
    </div>
  );
};
