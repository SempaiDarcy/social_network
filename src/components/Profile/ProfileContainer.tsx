import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";
import axios from "axios";
import {ProfileUsers, setUserProfileAC} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type ProfileContainerType = {
    setUserProfile:(profile:ProfileUsers)=>void,
    profileState:ProfileUsers
}
class ProfileContainer extends React.Component<ProfileContainerType,ProfileUsers>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
            .then(response => {
            this.props.setUserProfile(response.data)
                console.log(response.data)
            })
    }

    render() {
        return <div>
            <Profile profileState={this.props.profileState}/>
        </div>
    }
}
const mapStateToProps = (state: AppRootStateType) => {
    console.log(state.profilePage.profile)
    return {
        profileState: state.profilePage.profile
    }
}
export default connect(mapStateToProps,{setUserProfile:setUserProfileAC})(ProfileContainer)