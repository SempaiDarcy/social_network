import {AddPost} from "./AddPost";
import {connect} from "react-redux";
import {AppDispatchType} from "../../../../bll/redux-store";
import {addPostAC} from "../../../../bll/reducers/profileReducer";

type  MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(addPostAC(newPostText))
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps )(AddPost)