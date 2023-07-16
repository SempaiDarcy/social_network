import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {DispatchType, StateType} from "../../../redux/redux-store";
import {addLikeAC} from "../../../redux/profile-reducer";
const mapStateToProps = (state:StateType) => {
    return {
        posts:state.profilePage.posts
    }
}
const mapStateToDispatch = (dispatch:DispatchType) => {
    return {
        addLike:(count:number,id:string) => dispatch(addLikeAC(count,id))
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts)