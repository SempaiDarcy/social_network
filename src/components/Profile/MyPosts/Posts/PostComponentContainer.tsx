import React from "react";

import {ActionDispatchType} from "../../../../redux/store";
import {PostComponent} from "./PostComponent";
import {PostDataType} from "../MyPosts";

type PostComponentProps = {
    postData: PostDataType
    dispatch: (action: ActionDispatchType) => void
}

export const PostComponentContainer = (props: PostComponentProps) => {

    return (
        <PostComponent id={props.postData.id}
                       message={props.postData.message}
                       likes={props.postData.likes}
                       />
        )

}
