import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {DispatchType} from "../../../../redux/redux-store";
import {addPostAC} from "../../../../redux/profile-reducer";

type  MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(addPostAC(newPostText))
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps )(AddPost)