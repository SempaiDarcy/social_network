import {StateType} from "../../../bll/types";
import {AppDispatchType} from "../../../bll/redux-store";
import {connect} from "react-redux";
import {MyPosts, PostDataType} from "./MyPosts";
import {addLike} from "../../../bll/reducers/profileReducer";

type mapStateToPropsType = {
    postData: PostDataType[]
    userName: string
    userAvatar: string
}
type mapDispatchToPropsType  = {
    addLike: (count: number, id: string) => void
}

let mapStateToProps = (state: StateType):mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        userName: state.profilePage.profile.fullName,
        userAvatar: state.profilePage.profile.photos.small
    }
}

let mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {
        addLike: (count: number, id: string) => dispatch(addLike(count, id)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)