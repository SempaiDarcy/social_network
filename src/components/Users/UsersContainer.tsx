import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import {UsersType} from "../../redux/store";
import {Users} from "./User/Users";
export const mapStateToProps = (state:StateType)=> {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
export const mapStateToDispatch = (dispatch:DispatchType) => {
    return {
        setUsers:(users:UsersType[])=>dispatch(setUsersAC(users)),
        follow:(userId:number)=>dispatch(followAC(userId)),
        unfollow:(userId:number)=>dispatch(unfollowAC(userId)),
        setCurrentPage:(currentPage:number)=>dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount:(totalCount:number)=>dispatch(setUsersTotalCountAC(totalCount))
    }
}

export const UsersContainer = connect(mapStateToProps,mapStateToDispatch)(Users)