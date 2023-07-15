import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toogleFollowingProgress,
    toogleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React, {Component} from 'react';
import {UsersType} from "../../redux/store";
import {Users} from "./User/Users";
import {Loader} from "../common/Loader/Loader";
import {usersAPI} from "../../api/api";

type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:number[]
}
type mapDispatchToPropsType = {
    setUsers: (users: UsersType[]) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    setUsersTotalCount: (totalCount: number) => void
    toogleIsFetching:(isFetching:boolean)=>void
    toogleFollowingProgress:(isFetching:boolean,userId:number)=>void
}

class UsersContainer extends Component<UserPropsType> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    // в классовой компоненте обязателен метод render() который будет возвращать тот самый jsx
    render() {
        return <>
            <h1>Users</h1>
            {this.props.isFetching ?<Loader/>  :
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    toogleFollowingProgress={this.props.toogleFollowingProgress}
                />}
        </>
    }
}

 const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// export default connect(mapStateToProps, {
//     setUsers: setUsers,
//     follow: follow,
//     unfollow: unfollow,
//     setCurrentPage: setCurrentPage,
//     setTotalUsersCount: setUsersTotalCount,
//     toogleIsFetching:toogleIsFetching
// })(UsersContainer)

export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setUsersTotalCount,
    toogleIsFetching,
    toogleFollowingProgress
})(UsersContainer)