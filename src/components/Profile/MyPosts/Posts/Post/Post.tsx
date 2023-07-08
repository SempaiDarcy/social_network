import s from "./Post.module.css";
import like from './../img/like.png'
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
            <div className={s.profile}>
                <img className={s.avatar}
                     src="https://avatars.mds.yandex.net/i?id=1b423d69437bfdaff08a53402617e97ed457c044-7763867-images-thumbs&n=13"
                     alt="avatar"/>
                <div className={s.name}>Akbar Gabdualiev</div>
            </div>
            <div className={s.message}>{props.message}</div>
            <div className={s.parent}>
                <span className={s.likesCount}>{props.likes}</span>
                <img className={s.like} src={like} alt="" onClick={addLike}/>
            </div>
        </div>
    );
};
