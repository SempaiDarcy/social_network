import React, {Component} from "react";
import {ProfileType} from "../../redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../redux/redux-store";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType
    isAuth:boolean
}
type mapDispatchToPropsType = {
    getUserProfileTC:(userID:string)=>void
}
type PathParamsType = {
    userID:string
}
type ContentPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
class ProfileContainer extends Component<ContentPropsType> {
    componentDidMount() {
        let userId=this.props.match.params.userID
       // usersAPI.getUserProfile(this.props.match.params.userID).then((data)=>{
       //      this.props.setUserProfile(data)
       //  })
        this.props.getUserProfileTC(userId)
    }

    render () {
        if (!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return (
                <Profile {...this.props}/>
        );
    }
}
const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        profile:state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps,{getUserProfileTC})(WithUrlDataContainerComponent)
