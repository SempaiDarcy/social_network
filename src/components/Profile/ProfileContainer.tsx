import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";
import axios from "axios";
import {ProfileUsers, setUserProfileAC} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type ProfileContainerType = {
    setUserProfile: (profile: ProfileUsers) => void,
    profileState: ProfileUsers
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
    return {
        profileState: state.profilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withUrlDataContainerComponent)