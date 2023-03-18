import React from 'react';
import {connect} from "react-redux";
import Users, {UserType} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {Action, Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);