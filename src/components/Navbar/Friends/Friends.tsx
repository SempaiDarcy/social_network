import React from 'react';
import f from './Friends.module.css'

type ImgFriends = {
    id: number
    img: string
    err: string
}
export type FriendsType = {
    title: string
    imgFriends: ImgFriends[]
}

export const Friends = (props: FriendsType) => {
    return (
        <div className={f.friendsContainer}>
            <span className={f.friendsTitle}>{props.title}</span>
            <div>
                {props.imgFriends.map(img => {
                    return (
                        <span key={img.id}>
                            <img src={img.img} alt={img.err}  className={f.img} />
                        </span>
                    )
                })}
            </div>
        </div>
    );
};