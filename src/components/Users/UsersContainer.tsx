import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import React, {Component} from 'react';
import axios from "axios";
import {UsersType} from "../../redux/store";
import {Users} from "./User/Users";

type UserPropsType = {
    users: UsersType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    setUsers: (users: UsersType[]) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage:(currentPage:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void
}

class UsersContainer extends Component<UserPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
        })
    }
    // в классовой компоненте обязателен метод render() который будет возвращать тот самый jsx
    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
        />
    }
}

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

export default connect(mapStateToProps,mapStateToDispatch)(UsersContainer)