import {connect} from "react-redux";
import {AddPost} from "./AddPost";
import {DispatchType} from "../../../../redux/redux-store";
import {addPostAC} from "../../../../redux/profile-reducer";

type mapDispatchToPropsType = {
    addPost:(newPostText:string)=>void
}
const mapDispatchToProps = (dispatch:DispatchType):mapDispatchToPropsType => {
    return {
        addPost:(newPostText:string)=>dispatch(addPostAC(newPostText)),
    }
}
export const AddPostContainer = connect(null,mapDispatchToProps)(AddPost)
