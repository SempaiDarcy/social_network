import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {DispatchType, StateType} from "../../../redux/redux-store";
import {addLikeAC} from "../../../redux/profile-reducer";
const mapStateToProps = (state:StateType) => {
    return {
        posts:state.profilePage.posts,
        userName: state.profilePage.profile.fullName,
        userAvatar: state.profilePage.profile.photos.small
    }
}
const mapStateToDispatch = (dispatch:DispatchType) => {
    return {
        addLike:(count:number,id:string) => dispatch(addLikeAC(count,id))
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts)