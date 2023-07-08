import {connect} from "react-redux";
import {Users} from "./User/User";
import {DispatchType, StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UsersType} from "../../redux/store";
export const mapStateToProps = (state:StateType)=> {
    return {
        users:state.usersPage.users
    }
}
export const mapStateToDispatch = (dispatch:DispatchType) => {
    return {
        setUsers:(users:UsersType[])=>dispatch(setUsersAC(users)),
        follow:(userId:number)=>dispatch(followAC(userId)),
        unfollow:(userId:number)=>dispatch(unfollowAC(userId))
    }
}

export const UsersContainer = connect(mapStateToProps,mapStateToDispatch)(Users)