import React from 'react';
import PostsClasses from './Post.module.css'

export type PostType = {
    id: string
    mes: string
    photo: string
    likeCounts: number
    errorMes: string
}
type PostsArrType = {
    posts: PostType[]
}
export const Post = (props: PostsArrType) => {
    return (
            <div className={PostsClasses.red}>
                {props.posts.map(p => {
                    return (
                        <div key={p.id}>
                            <img src={p.photo} alt={p.errorMes}/>
                            {p.mes}
                            <div>
                                <span>Like {p.likeCounts}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
    );
};

