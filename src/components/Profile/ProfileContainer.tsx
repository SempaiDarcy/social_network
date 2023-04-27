import {connect} from "react-redux";
import {Profile} from "./Profile";
import React from "react";
import {setUserProfileAC} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & any

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2
        }
        usersAPI.getProfile(userId).then((res)=>{
            this.props.setUserProfileAC(res.data)
        })
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <div>
            <Profile profileState={this.props.profileState}/>
        </div>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profileState: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfileAC})(withUrlDataContainerComponent)