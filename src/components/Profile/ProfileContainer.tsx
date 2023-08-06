import React, {Component, ComponentType} from "react";
import {ProfileType} from "../../redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    addLikeAC,
    addPostAC,
    getStatusProfileTC,
    getUserProfileTC, savePhotoTC, saveProfileTC,
    setUserProfile,
    updateStatusProfileTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";
import {ProfileDataFormDataType} from "../../api/api";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType,
    status: string,
    authUserId: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfileTC: (userID: string) => void
    getStatusProfileTC: (userID: string) => void
    updateUserStatus: (status: string) => void
    savePhotoTC: (photo: File) => void
    saveProfileTC: (data: ProfileDataFormDataType) => void
}
type PathParamsType = {
    userID: string
}
type ContentPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends Component<ContentPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userID
        if (!userId) {
            userId = this.props.authUserId ? this.props.authUserId.toString() : ''
            if (userId === '') {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusProfileTC(userId)
    }


    render() {
        console.log('Render Profile')
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateUserStatus} authUserId={this.props.authUserId}
                     savePhoto={this.props.savePhotoTC}
                     saveProfile={this.props.saveProfileTC}
                     isAuth={this.props.isAuth}
                     isOwner = {!this.props.match.params.userID}
            />
        );
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose<ComponentType>(
    // WithAuthRedirect,
    connect(mapStateToProps, {
        addPost: addPostAC, addLikeAC, setUserProfile, getUserProfileTC, getStatusProfileTC,
        updateUserStatus: updateStatusProfileTC, savePhotoTC, saveProfileTC}), withRouter)(ProfileContainer)