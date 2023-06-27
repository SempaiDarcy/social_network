import React from "react";
import post from "./PostComponent.module.css"
import avatar from "./img/ninja.png"
import likefill from "./img/like_fill.png"


type PostComponentProps = {
    id: string
    message: string
    likes: number
}

export const PostComponent = (props: PostComponentProps) => {


    const onClickLikeHandler = () => {
        let count = props.likes+1
    }

    return (
        <div className={post.post}>
            <img className={post.avatar} src={avatar} alt={'avatar image'}/>
            <span className={post.message}> {props.message}</span>
            <div className={post.likes}>
                <img className={post.likeimg} src={likefill} onClick={onClickLikeHandler} alt={'likes image'}/>
                <span> {props.likes}</span>
            </div>

        </div>
        )

}
