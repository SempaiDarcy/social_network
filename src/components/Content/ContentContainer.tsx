import React from "react";
import Content from "./Content";
import {PostDataType} from "./MyPosts/MyPosts";
import {ProfileUserType} from "../../bll/types";
import {connect} from "react-redux";
import {
    addLike,
    addPostAC,
    getUserProfileTC,
    getUserStatusTC, savePhotoTC, saveProfileTC, setUserProfile,
    updateUserStatusTC
} from "../../bll/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {stateType} from "../../bll/redux-store";
import {compose} from "redux";
import {getIsAuth, getUserID} from "../../bll/selectors/authSelectors";
import {getPostsData, getProfileData, getProfileStatus} from "../../bll/selectors/profileSelectors";
import {ProfileDataFormDataType} from "./Profile/ProfileDataForm/ProfileDataForm";

type mapStateToPropsType = {
    postData: PostDataType[]
    profile: ProfileUserType
    status: string
    isAuth: boolean
    userID: number | null
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    addLike: (count: number, id: string) => void
    setUserProfile: (profile: ProfileUserType) => void
    getUserProfileTC: (userID: string) => void
    getUserStatusTC: (userID: string) => void
    updateUserStatus: (status: string) => void
    savePhotoTC: (photo: File) => void
    saveProfileTC: (data: ProfileDataFormDataType) => void

}
type PathParamsType = {
    userID: string,
}



type ContentPropsType = RouteComponentProps<PathParamsType> & mapStateToPropsType
    & mapDispatchToPropsType

export class ContentContainer extends React.Component<ContentPropsType> {
    refreshProfile = () => {
        let userAuthorizedID = this.props.match.params.userID
        if (!userAuthorizedID) {
            userAuthorizedID = this.props.userID ? this.props.userID.toString() : ''
            if (userAuthorizedID === '') {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfileTC(userAuthorizedID)
        this.props.getUserStatusTC(userAuthorizedID)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ContentPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userID !== prevProps.match.params.userID)
        this.refreshProfile()
    }

    render() {
        return <Content isOwner={!this.props.match.params.userID}
                        savePhoto={this.props.savePhotoTC}
                        saveProfile={this.props.saveProfileTC}
                        {...this.props}/>
    }
}

let mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        postData: getPostsData(state),
        profile: getProfileData(state),
        status: getProfileStatus(state),
        isAuth: getIsAuth(state),
        userID: getUserID(state),
    }
}

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        addPost: addPostAC, addLike, setUserProfile,
        getUserProfileTC, getUserStatusTC,
        updateUserStatus: updateUserStatusTC, savePhotoTC, saveProfileTC
    } as mapDispatchToPropsType),
    withRouter)(ContentContainer)

