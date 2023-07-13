import React, {Component} from "react";
import {ProfileType, RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType) => void
}
type PathParamsType = {
    userID:string
}
type ContentPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
class ProfileContainer extends Component<ContentPropsType> {
    componentDidMount() {
        // let userId=this.props.match.params.userID
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userID !== undefined ? this.props.match.params.userID : 2}`).then((res)=>{
            this.props.setUserProfile(res.data)
        })
    }

    render () {
        return (
                <Profile {...this.props}/>
        );
    }
}
const mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        profile:state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)
