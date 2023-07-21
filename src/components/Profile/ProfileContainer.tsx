import React, {Component, ComponentType} from "react";
import {ProfileType} from "../../redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusProfileTC, getUserProfileTC, updateStatusProfileTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType,
    status: string,
    authUserId:number|null
    isAuth:boolean
}
type mapDispatchToPropsType = {
    getUserProfileTC: (userID: string) => void
    getStatusProfileTC: (userID: string) => void
    updateUserStatus:(status:string)=>void
}
type PathParamsType = {
    userID: string
}
type ContentPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends Component<ContentPropsType> {
    componentDidMount() {
        // console.log(this.props.status)
        let userId = this.props.match.params.userID
        // usersAPI.getUserProfile(this.props.match.params.userID).then((data)=>{
        //      this.props.setUserProfile(data)
        //  })
        if(!userId) {
            userId=this.props.authUserId ? this.props.authUserId.toString():''
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusProfileTC(userId)
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus} authUserId={this.props.authUserId} isAuth={this.props.isAuth}/>
        );
    }
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId:state.auth.id,
        isAuth:state.auth.isAuth
    }
}
// const WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default WithAuthRedirect(connect (mapStateToProps,{getUserProfileTC})(WithUrlDataContainerComponent))
export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {getUserProfileTC, getStatusProfileTC,updateUserStatus:updateStatusProfileTC}), withRouter)(ProfileContainer)