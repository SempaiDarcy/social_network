import s from "./Post.module.css";

export type PropsType = {
    id:string
    message: string,
    likes: number,
    addLike:(count:number,id:string)=>void
};
export const Post = (props: PropsType) => {
    const addLike = () => {
        let likes = props.likes+1
        props.addLike(likes,props.id)
    }
    return (
        <div className={s.post}>
            <img
                src="https://avatars.mds.yandex.net/i?id=1b423d69437bfdaff08a53402617e97ed457c044-7763867-images-thumbs&n=13"
                alt="avatar"
            />
            post 1
            <div>
                <span onClick={addLike}>{props.likes} Likes</span>
                <div>{props.message}</div>
            </div>
        </div>
    );
};
