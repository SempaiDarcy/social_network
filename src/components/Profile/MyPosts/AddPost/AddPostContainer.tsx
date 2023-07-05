import {connect} from "react-redux";
import {AddPost} from "./AddPost";
import {DispatchType} from "../../../../redux/redux-store";
import {RootStateType} from "../../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../../redux/profile-reducer";

const mapStateToProps = (state:RootStateType) => {
    return {newPostText:state.profilePage.newPostText}
}
const mapDispatchToProps = (dispatch:DispatchType) => {
    return {
        addPost:()=>dispatch(addPostAC()),
        changePostText:(text:string)=>dispatch(changeNewTextAC(text))
    }
}
export const AddPostContainer = connect(mapStateToProps,mapDispatchToProps)(AddPost)
