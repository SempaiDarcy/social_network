import React, {Component, ComponentType} from "react";
import {ProfileType} from "../../redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from "redux";

type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: ProfileType
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
        let userId= this.props.match.params.userID
       // usersAPI.getUserProfile(this.props.match.params.userID).then((data)=>{
       //      this.props.setUserProfile(data)
       //  })
        this.props.getUserProfileTC(userId)
    }

    render () {
        return (
                <Profile {...this.props}/>
        );
    }
}
const mapStateToProps = (state:StateType):mapStateToPropsType => {
    return {
        profile:state.profilePage.profile,
    }
}
// const WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default WithAuthRedirect(connect (mapStateToProps,{getUserProfileTC})(WithUrlDataContainerComponent))
export default compose<ComponentType>(WithAuthRedirect,connect(mapStateToProps,{getUserProfileTC}),withRouter)(ProfileContainer)