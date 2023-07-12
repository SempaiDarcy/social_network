import React, {Component} from "react";
import {ProfileType, RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile:(profile:ProfileType) => void
}
type ContentStateType = {}
class ProfileContainer extends Component<ProfileContainerPropsType,ContentStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res)=>{
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
export default connect (mapStateToProps,{setUserProfile})(ProfileContainer)
