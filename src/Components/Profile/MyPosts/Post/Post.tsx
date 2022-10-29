import React from 'react';
import s from './Post.module.css'



const Post = (props: any) => {
    console.log(props.message);
    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/media/E2BXVN3WUA0ncwK.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post;